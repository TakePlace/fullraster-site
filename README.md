# Fullraster — Site institucional (Next.js)

Projeto Next.js (App Router) do site institucional da Fullraster Rastreamento de Veículos, convertido a partir do layout em PDF/Canva.

## Estrutura

```
app/
  layout.js            → fonte (Poppins) e metadados SEO
  page.js               → monta todas as seções na ordem
  globals.css            → todo o estilo do site (navy #010066 + laranja #FF6501)
  components/            → um componente por seção
lib/
  contact.js             → configuração central do WhatsApp, telefone e e-mail
public/
  images/                 → todas as fotos e o logo, já otimizados
```

## Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org) 18 ou superior.

```bash
npm install
npm run dev
```

Abra http://localhost:3000

## Como editar o WhatsApp / telefone / e-mail

Abra `lib/contact.js`:

```js
export const WHATSAPP_NUMBER = "5551981240812";
export const PHONE_DISPLAY = "51 3015.5253";
export const EMAIL = "contato@fullraster.com.br";
```

## Formulário de cotação

O formulário "É fácil e rápido" (`app/components/CotacaoForm.js`) não tem backend — ao
enviar, ele monta uma mensagem com os dados preenchidos e abre direto no WhatsApp. Se no
futuro quiser salvar os leads num banco de dados ou CRM, é só trocar a função `handleSubmit`
por uma chamada de API.

## Deploy

```bash
npm run build
npm start
```

Compatível com o deploy "Node.js Apps" da Hostinger (Import Git Repository → build automático a cada push) e também com a Vercel.
