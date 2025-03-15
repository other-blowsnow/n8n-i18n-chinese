# Tutorial de Idioma
## Configurando a Variável de Ambiente
> Referência para outros idiomas: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language

N8N_DEFAULT_LOCALE=pt-BR

## Substituindo o pacote editor-ui
Encontre a versão correspondente nas releases e mapeie o caminho do docker

/usr/local/lib/node_modules/n8n/node_modules/n8n-editor-ui/dist


## Comando Docker completo para teste
```shell
docker run -it --rm --name n8ntest \
-p 15678:5678 \
-v 【substitua pelo seu diretório】:/usr/local/lib/node_modules/n8n/node_modules/n8n-editor-ui/dist \
-e N8N_DEFAULT_LOCALE=pt-BR \
-e N8N_SECURE_COOKIE=false \
n8nio/n8n
```

# Como funciona
> O editor-ui tem suporte a i18n, mas os pacotes de idioma não estão disponíveis

Adicione manualmente o arquivo pt-BR.json ao diretório i18n do editor-ui e recompile
Configure o idioma no ambiente para usar o português normalmente
