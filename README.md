# Cardápio da semana

Aplicativo estático com o cardápio incorporado. Permite escolher o dia, ver uma refeição
ou o dia completo e imprimir a seleção. Funciona em celular e computador, sem servidor
de aplicação, bibliotecas externas, cadastro ou rastreamento.

Os alimentos e porções em `cardapio.js` são públicos quando este site é publicado.
Esta pasta contém apenas o aplicativo e os dados do cardápio; não contém exames,
histórico clínico ou credenciais. Não representa uma nova avaliação nutricional.

## GitHub Pages

Publicar os arquivos desta pasta em um repositório dedicado. Em Settings → Pages,
selecionar Deploy from a branch, branch `main` e pasta `/ (root)`.

Abrir `index.html` também funciona localmente. Para atualizar o cardápio, substituir
`cardapio.js` pelo arquivo gerado a partir das porções revisadas.
