import 'package:flutter/material.dart';
import 'screens/search_screen.dart'; // Importez votre fichier d'interface

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Mon App de Recherche',
      theme: ThemeData(primarySwatch: Colors.blue, useMaterial3: true),
      // On définit la page de recherche comme page d'accueil
      home: SearchScreen(),
      debugShowCheckedModeBanner: false,
    );
  }
}
