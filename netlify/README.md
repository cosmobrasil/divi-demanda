# Deploy Netlify (sem GitHub)

Este repositório gera um único site estático com:

- `/` portal (página de entrada)
- `/demanda/` app React/Vite do formulário de demanda
- `/oferta/` app React/Vite do formulário de oferta

## Build local para upload manual

Na raiz do projeto:

```bash
./netlify/build.sh
```

O resultado fica em `netlify/publish/`. Faça upload dessa pasta no Netlify (Deploy manual / drag-and-drop).

## Observação: CNPJ (EmpresaQui)

Em produção, o autopreenchimento por CNPJ depende de um proxy (CORS). Se você quiser manter essa funcionalidade no Netlify, use uma Netlify Function (ver `netlify/functions/empresaqui.mjs`) e configure a variável `EMPRESAQUI_TOKEN` no painel do Netlify.

