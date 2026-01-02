# Ma procédure Git en 10 lignes
1. git clone <repo>
2. git checkout -b feature/ma-branche
3. Modifier ou ajouter des fichiers
4. git add <fichiers>
5. git commit -m "feat/docs/fix: message clair"
6. Répéter add + commit autant que nécessaire
7. git push origin feature/ma-branche
8. Ouvrir une Pull Request pour merger dans master
9. git merge --no-ff feature/ma-branche
10. git pull master pour mettre à jour localement

