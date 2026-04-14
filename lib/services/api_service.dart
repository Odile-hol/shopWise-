import 'dart:convert';
import 'dart:io';
import 'package:http/http.dart' as http;
import '../screens/search_result.dart';

class ApiService {
  static const String baseUrl = "https://api.votre-domaine.com";

  // On définit un timeout de 10 secondes
  static const Duration _timeoutLimit = Duration(seconds: 10);

  Future<List<SearchResult>> searchData(String query) async {
    if (query.isEmpty) return [];

    // On prépare l'URL avec les paramètres proprement encodés
    final Uri url = Uri.parse(
      '$baseUrl/search',
    ).replace(queryParameters: {'q': query});

    try {
      final response = await http
          .get(
            url,
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              // Exemple de header de sécurité
              'X-Requested-With': 'XMLHttpRequest',
            },
          )
          .timeout(_timeoutLimit);

      return _handleResponse(response);
    } on SocketException {
      // Pas de connexion internet
      throw Exception('Pas de connexion internet.');
    } on http.ClientException {
      // Erreur côté client HTTP
      throw Exception('Erreur de configuration client.');
    } catch (e) {
      throw Exception('Erreur inconnue : $e');
    }
  }

  // Séparation de la logique de réponse (Exigence propre d'un Endpoint)
  List<SearchResult> _handleResponse(http.Response response) {
    switch (response.statusCode) {
      case 200:
        List<dynamic> body = json.decode(response.body);
        return body.map((item) => SearchResult.fromJson(item)).toList();
      case 400:
        throw Exception('Requête invalide (400).');
      case 401:
        throw Exception('Non autorisé (401).');
      case 404:
        throw Exception('Endpoint introuvable (404).');
      case 500:
        throw Exception('Erreur interne du serveur (500).');
      default:
        throw Exception('Erreur imprévue : ${response.statusCode}');
    }
  }
}
