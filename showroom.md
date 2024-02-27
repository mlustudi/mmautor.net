---
title: Showroom
layout: showroom
description: "Im Masterstudium entwickeln die Studierenden Filme, Podcasts, journalistische Social Media Kanäle, Webseiten u. v. m. Hier eine Auswahl studentischer Medienprojekte."
splide: true
lang-ref: showroom
order: 2
---

<!-- Der Inhalt dieser Seite wird über _layouts/showroom.html generiert. -->

Innerhalb der zwei Jahre des Masterstudiums entwickeln und realisieren die Studierenden, zum Teil in Kooperation mit den verschiedenen Partner:innen, Projekte zu vielfältigen Themenschwerpunkten.  Ziel ist es, innerhalb des Studiums ein relevantes Portfolio für den Berufseinstieg aufzubauen.
Im 3. Semester entwickelt jeder Jahrgang ein journalistisches Jahrgangsprojekt, bei dem gesellschaftliche, politische und wissenschaftliche Zusammenhänge bearbeitet werden. Zum Abschluss des Studiums gehört neben einer Thesis auch ein praktisches Masterprojekt. Darin erarbeiten die Studierenden allein oder im Team ein selbstgewähltes Thema und setzen es digitaljournalistisch um. Die Projekte reichen von Dossiers über Podcasts bis hin zu journalistischen Instagramkanälen oder medienpädagogischen Projekten.
Im Showroom sind Projekte der vergangenen Jahre zusammengestellt.

# Showroom

{% assign posts = site.posts | where:"lang", page.lang %}

## Klima und Zukunft

Diese Projekte widmen sich der Klimakrise, ihren spürbaren Folgen und Ideen, wie wir die Zukunft dennoch besser gestalten können. 

{% assign klima = posts | where: "categories","klima" %}
<ul class="showroom-list">
{% for post in klima %}
<li><a href="{% if post.ext_url %}{{ post.ext_url }}{% else %}{{ post.url }}{% endif %}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title | escape }}" data-storefront-description="{{ post.description | smartify }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>

## Identität und Gesellschaft

Wer bin ich und warum? Diese Projekte geben Antworten. 

{% assign identgs = posts | where: "categories","identgs" %}
<ul class="showroom-list">
{% for post in identgs %}
<li><a href="{% if post.ext_url %}{{ post.ext_url }}{% else %}{{ post.url }}{% endif %}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title | escape }}" data-storefront-description="{{ post.description | smartify }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>

## Erfahren und Erinnern

Seit 2007 arbeiten wir in der Filmreihe [Stolpersteine - Filme gegen das Vergessen](https://stolpersteine.medienkomm.uni-halle.de/) Geschichten hinter den Stolpersteinen auf. Weitere Geschichten und historische Biografien arbeiten unter anderem diese Projekte auf: 

{% assign erinnern = posts | where: "categories","erinnern" %}
<ul class="showroom-list">
{% for post in erinnern %}
<li><a href="{{ post.ext_url }}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title | escape }}" data-storefront-description="{{ post.description | escape }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>

## Halle und Sachsen-Anhalt

Themen direkt vor der eigenen Tür oder in der näheren Umgebung bearbeiten diese Projekte:

{% assign halsan = posts | where: "categories","halsan" %}
<ul class="showroom-list">
{% for post in halsan %}
<li><a href="{{ post.ext_url }}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title | escape }}" data-storefront-description="{{ post.description | escape }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>

