# Cardápio da semana

Aplicativo estático com o cardápio incorporado. Permite escolher o dia, ver uma refeição
ou o dia completo e imprimir a seleção. Funciona em celular e computador, sem servidor
de aplicação, bibliotecas externas, cadastro ou rastreamento.

## Compras da semana

Abra [Lista de compras](./compras.html) pelo menu do aplicativo. A lista cobre uma pessoa
por sete dias: 40 itens, organizados por setor, com quantidades para comprar/reservar e
consumo exato do cardápio. As compras em cru/seco são estimativas de planejamento;
rendimento e perdas variam. As porções das refeições permanecem as mesmas.

É possível marcar os itens na página, imprimir pelo navegador ou baixar o PDF de duas
páginas A4. As marcações não são salvas entre visitas. O arquivo `compras.json` contém
os mesmos dados da lista. Lista gerada em 19/10/2026, com o cardápio de 15/10/2026.

Os alimentos e porções em `cardapio.js` são públicos quando este site é publicado.
Esta pasta contém apenas o aplicativo e os dados do cardápio; não contém exames,
histórico clínico ou credenciais. Não representa uma nova avaliação nutricional.

## GitHub Pages

Publicar os arquivos desta pasta em um repositório dedicado. Em Settings → Pages,
selecionar Deploy from a branch, branch `main` e pasta `/ (root)`.

Abrir `index.html` também funciona localmente. Para atualizar o cardápio, substituir
`cardapio.js` pelo arquivo gerado a partir das porções revisadas.
