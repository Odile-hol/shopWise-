import 'package:flutter/material.dart';

class SearchScreen extends StatefulWidget {
  @override
  _SearchScreenState createState() => _SearchScreenState();
}

class _SearchScreenState extends State<SearchScreen> {
  List<dynamic> _results = [];
  bool _isLoading = false;
  final TextEditingController _searchController = TextEditingController();

  void _onSearchChanged(String query) async {
    if (query.isEmpty) {
      setState(() => _results = []);
      return;
    }
    setState(() => _isLoading = true);
    try {
      await Future.delayed(const Duration(milliseconds: 500));
      setState(() {
        _results = [
          {"title": "Résultat Skylis pour $query"},
        ];
        _isLoading = false;
      });
    } catch (e) {
      setState(() => _isLoading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: const Color(0xFF0F0F0F),
      body: Stack(
        children: [
          // Motif de nuages en arrière-plan
          _buildBackgroundPattern(),

          SafeArea(
            child: Column(
              children: [
                Expanded(
                  child: SingleChildScrollView(
                    physics: const BouncingScrollPhysics(),
                    child: Column(
                      children: [
                        const SizedBox(
                          height: 100,
                        ), // Un peu plus d'espace en haut
                        // 1. LOGO & TITRE SKYLIS
                        Center(
                          child: Column(
                            children: [
                              _buildSkylisLogo(),
                              const SizedBox(height: 20),
                              const Text(
                                "Skylis",
                                style: TextStyle(
                                  color: Colors.white,
                                  fontSize: 40,
                                  fontWeight: FontWeight.w900,
                                  letterSpacing: -1.0,
                                ),
                              ),
                            ],
                          ),
                        ),

                        const SizedBox(height: 40),
                        _buildSingleTab(),
                        const SizedBox(height: 25),

                        // 2. BARRE DE RECHERCHE
                        Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 20),
                          child: _buildCompleteSearchBar(),
                        ),

                        const SizedBox(height: 30),

                        // 3. ZONE DE RÉSULTATS
                        _isLoading
                            ? const Center(
                                child: CircularProgressIndicator(
                                  color: Colors.blueAccent,
                                ),
                              )
                            : _buildResultList(),

                        const SizedBox(height: 50),
                      ],
                    ),
                  ),
                ),
                // 4. BARRE DE NAVIGATION
                _buildBottomNavigation(),
              ],
            ),
          ),
        ],
      ),
    );
  }

  // --- MOTIF DE NUAGES (BACKGROUND) ---
  Widget _buildBackgroundPattern() {
    return Opacity(
      opacity: 0.05,
      child: GridView.builder(
        physics: const NeverScrollableScrollPhysics(),
        gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
          crossAxisCount: 5,
          mainAxisSpacing: 10,
          crossAxisSpacing: 10,
        ),
        itemBuilder: (context, index) =>
            const Icon(Icons.wb_cloudy_outlined, color: Colors.white, size: 30),
      ),
    );
  }

  Widget _buildSkylisLogo() {
    return Container(
      width: 90,
      height: 90,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        gradient: const LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [Colors.blueAccent, Color(0xFF00D4FF)],
        ),
        boxShadow: [
          BoxShadow(
            color: Colors.blueAccent.withOpacity(0.3),
            blurRadius: 25,
            spreadRadius: 2,
          ),
        ],
      ),
      child: const Icon(Icons.wb_cloudy_rounded, size: 50, color: Colors.white),
    );
  }

  Widget _buildSingleTab() {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 10),
      decoration: BoxDecoration(
        color: Colors.white.withOpacity(0.08),
        borderRadius: BorderRadius.circular(25),
      ),
      child: const Text(
        "Rechercher",
        style: TextStyle(
          color: Colors.white,
          fontWeight: FontWeight.w600,
          fontSize: 15,
        ),
      ),
    );
  }

  Widget _buildCompleteSearchBar() {
    return Container(
      decoration: BoxDecoration(
        color: const Color(0xFF1E1E1E),
        borderRadius: BorderRadius.circular(50),
        border: Border.all(color: Colors.white.withOpacity(0.1)),
      ),
      child: TextField(
        controller: _searchController,
        onChanged: _onSearchChanged,
        style: const TextStyle(color: Colors.white),
        decoration: InputDecoration(
          hintText: "Faites une recherche privée...",
          hintStyle: TextStyle(color: Colors.white.withOpacity(0.2)),
          prefixIcon: const Icon(Icons.search, color: Colors.white38),
          suffixIcon: SizedBox(
            width: 80,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: const [
                Icon(Icons.mic_none_rounded, color: Colors.white38),
                SizedBox(width: 10),
                Icon(Icons.camera_alt_outlined, color: Colors.white38),
                SizedBox(width: 15),
              ],
            ),
          ),
          border: InputBorder.none,
          contentPadding: const EdgeInsets.symmetric(vertical: 18),
        ),
      ),
    );
  }

  Widget _buildBottomNavigation() {
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 20),
      decoration: BoxDecoration(
        color: const Color(0xFF0F0F0F),
        border: Border(top: BorderSide(color: Colors.white.withOpacity(0.05))),
      ),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: [
          Container(
            padding: const EdgeInsets.all(12),
            decoration: const BoxDecoration(
              color: Colors.blueAccent,
              shape: BoxShape.circle,
            ),
            child: const Icon(Icons.add, color: Colors.white, size: 28),
          ),
          const Icon(Icons.home_outlined, color: Colors.white54, size: 30),
        ],
      ),
    );
  }

  Widget _buildResultList() {
    if (_results.isEmpty) return const SizedBox.shrink();

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 20),
      child: Container(
        padding: const EdgeInsets.all(20),
        decoration: BoxDecoration(
          color: const Color(0xFF1E1E1E),
          borderRadius: BorderRadius.circular(25),
        ),
        child: ListView.separated(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          itemCount: _results.length,
          separatorBuilder: (_, __) => const Divider(color: Colors.white10),
          itemBuilder: (context, index) {
            final item = _results[index];
            return ListTile(
              leading: const Icon(Icons.check_circle, color: Colors.blueAccent),
              title: Text(
                item['title'],
                style: const TextStyle(color: Colors.white),
              ),
              trailing: const Icon(Icons.chevron_right, color: Colors.white12),
            );
          },
        ),
      ),
    );
  }
}
