# 📊 Guia de SEO - Portfolio Rodrigo Teixeira de Andrade

## ✅ Melhorias Implementadas

### 1. Meta Tags Completas no index.html
- ✅ Title otimizado com palavras-chave
- ✅ Meta description completa (155 caracteres)
- ✅ Meta keywords relevantes
- ✅ Author e copyright
- ✅ Robots meta tag
- ✅ Theme color para mobile

### 2. Open Graph e Social Media
- ✅ Tags Open Graph (Facebook/LinkedIn)
- ✅ Twitter Cards
- ✅ Suporte multilíngue (pt, en, es, fr)
- ✅ Canonical URL definida

### 3. Structured Data (Schema.org)
- ✅ JSON-LD com dados estruturados Person
- ✅ Informações profissionais
- ✅ Links para redes sociais
- ✅ Experiência e educação

### 4. Arquivos SEO Essenciais
- ✅ `robots.txt` criado
- ✅ `sitemap.xml` criado com hreflang
- ✅ `netlify.toml` com headers de segurança e cache

### 5. Configuração Angular
- ✅ Assets incluem robots.txt e sitemap.xml
- ✅ Build configurado para produção

---

## 🚀 Próximas Melhorias Recomendadas

### 1. **Imagem Open Graph (CRÍTICO)**
Crie uma imagem de preview social (1200x630px):
```
src/assets/images/og-image.jpg
```
- Inclua seu nome, foto e título profissional
- Use ferramentas como Canva ou Figma
- Otimize para web (<200KB)

### 2. **Implementing Server-Side Rendering (SSR)**
```bash
# Instalar Angular SSR
ng add @angular/ssr

# Ou usar Analog.js (já instalado)
npm install @analogjs/platform
```

**Por quê?** SPAs não são bem indexadas por bots. SSR renderiza HTML no servidor.

### 3. **Meta Tags Dinâmicas por Idioma**
Criar um serviço para atualizar meta tags quando o idioma mudar:

```typescript
// src/app/core/services/seo.service.ts
import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);
  private translate = inject(TranslateService);

  updateMetaTags() {
    const name = this.translate.instant('hero.name');
    const title = this.translate.instant('hero.title');
    const description = this.translate.instant('hero.description');

    this.title.setTitle(`${name} | ${title}`);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: `${name} | ${title}` });
    this.meta.updateTag({ property: 'og:description', content: description });
    this.meta.updateTag({ name: 'twitter:title', content: `${name} | ${title}` });
    this.meta.updateTag({ name: 'twitter:description', content: description });
  }
}
```

### 4. **Performance** 
```bash
# Analise o bundle
npm install -D webpack-bundle-analyzer
ng build --stats-json
npx webpack-bundle-analyzer dist/portfolio/stats.json
```

**Otimizações:**
- Lazy loading de rotas (já implementado)
- Compressão de imagens
- Minificação de assets
- Service Worker (PWA)

### 5. **PWA (Progressive Web App)**
```bash
ng add @angular/pwa
```

Benefícios:
- Offline support
- Melhor performance
- Installable
- Better SEO

### 6. **Analytics e Search Console**
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>

<!-- Google Search Console -->
<meta name="google-site-verification" content="seu-codigo-aqui">
```

### 7. **Acessibilidade (A11y)**
- Usar ARIA labels
- Alt text em todas as imagens
- Contraste adequado (WCAG AAA)
- Navegação por teclado
- Lighthouse score 100%

### 8. **Content Updates**
- Blog posts sobre projetos
- Case studies detalhados
- Artigos técnicos (bom para SEO)

---

## 📝 Checklist de Deploy

Antes de fazer deploy em produção:

- [ ] Atualizar URL em `index.html` (canonical, og:url, twitter:url)
- [ ] Criar e adicionar imagem `og-image.jpg`
- [ ] Atualizar `sitemap.xml` com domínio real
- [ ] Atualizar `robots.txt` com domínio real
- [ ] Configurar Google Search Console
- [ ] Configurar Google Analytics
- [ ] Testar meta tags com:
  - [Facebook Debugger](https://developers.facebook.com/tools/debug/)
  - [Twitter Card Validator](https://cards-dev.twitter.com/validator)
  - [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
- [ ] Validar structured data com [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Testar performance com [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Validar acessibilidade com [WAVE](https://wave.webaim.org/)

---

## 🔍 Como Testar SEO Localmente

```bash
# Build de produção
pnpm build:prod

# Servir localmente
npx http-server dist/portfolio -p 8080

# Testar com Lighthouse
lighthouse http://localhost:8080 --view
```

---

## 📊 Ferramentas Recomendadas

1. **Google Search Console** - Monitorar indexação
2. **Google Analytics 4** - Analisar tráfego
3. **Ahrefs/SEMrush** - Pesquisa de palavras-chave
4. **Screaming Frog** - Auditoria técnica de SEO
5. **GTmetrix** - Performance e SEO
6. **Lighthouse CI** - Integração contínua de métricas

---

## 🎯 Métricas de Sucesso

**Core Web Vitals:**
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**SEO Score:**
- Lighthouse SEO: 100/100
- PageSpeed: 90+/100
- Acessibilidade: 100/100

---

## 📚 Recursos Adicionais

- [Google SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)
- [Angular SEO Guide](https://angular.io/guide/making-your-angular-app-seo-friendly)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)

---

**Última atualização:** 04/03/2026
