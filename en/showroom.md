---
title: Showroom
layout: showroom
lang: en
description: "In the Multimedia and Authorship master's program, students develop films, podcasts, journalistic social media channels, websites and much more. Here is a selection of  student media projects."
splide: true
lang-ref: showroom
order: 2
---

In the two years of the program's existence, students have developed and realized projects, some of them in cooperation with the various partners, on a variety of topics. For example, making films about the stories, fates and lives of the victims of National Socialism in Halle has been a tradition since 2007. The film series _Stolpersteine ​​- Filme gegen das Vergessen_ can be found at [YouTube](https://www.youtube.com/playlist?list=PLxt_Og7CuhTYAPvq2aYLgvHPvZojaJh45).

In the third semester, each class develops a digital, usually journalistic class project in which social, political and scientific contexts are examined. At the end of the program, there is a practical master project in addition to a thesis. Students, either working independently or in a team, choose a topic and realize it in digital, journalistic form. The projects range from dossiers to podcasts to journalistic Instagram channels and media-education projects. Projects from recent years are compiled in the Showroom.

# Showroom

{% assign posts = site.posts | where:"lang", page.lang %}

## Graffiti, Tofu, Fears of the Future

What influences our lives and what do we strive for? The great issues of existence are the focus of these projects.

{% assign leben = posts | where: "categories","leben" %}
<ul class="showroom-list">
{% for post in leben %}
<li><a href="{% if post.ext_url %}{{ post.ext_url }}{% else %}{{ post.url }}{% endif %}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title }}" data-storefront-description="{{ post.description | smartify }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>

## Stories that Wrote History

Which events shaped the city of Halle an der Saale, Saxony-Anhalt and Germany? A confrontation with the people persecuted and murdered under National Socialism that also covers social changes after the fall of the Berlin Wall and past persons and events that still affect the modern day. This is about regional importance.

{% assign zeitgeschichte = posts | where: "categories","zeitgeschichte" %}
<ul class="showroom-list">
{% for post in zeitgeschichte %}
<li><a href="{{ post.ext_url }}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title }}" data-storefront-description="{{ post.description }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>

## Filters, Wind Turbines, Enlightenment

What can an environmentally conscious and healthy life be? Fine dust, sustainability and renewable energies are the focuses of these projects.

{% assign klimawandel = posts | where: "categories","klimawandel" %}
<ul class="showroom-list">
{% for post in klimawandel %}
<li><a href="{{ post.ext_url }}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title }}" data-storefront-description="{{ post.description }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>

## Right Outside the Door

Of chickens, legends and the fall of the Berlin Wall: these stories from Saxony-Anhalt, Halle an der Saale and the surrounding area have moved our students.

{% assign sachsenanhalt = posts | where: "categories","sachsenanhalt" %}
<ul class="showroom-list">
{% for post in sachsenanhalt %}
<li><a href="{{ post.ext_url }}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title }}" data-storefront-description="{{ post.description }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>

## Experience and Remembrance

Between memorial culture and future perspectives, these projects deal with the individual lives of Halle natives.

{% assign biografien = posts | where: "categories","biografien" %}
<ul class="showroom-list">
{% for post in biografien %}
<li><a href="{{ post.ext_url }}" data-storefront-image="{{ post.image }}" data-storefront-title="{{ post.title }}" data-storefront-description="{{ post.description }}" class="storefront-anchor">{{ post.title }}</a></li>
{% endfor %}</ul>