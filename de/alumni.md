---
title: Alumni
lang: de
layout: default
exclude: true
footer: true
---

{% assign all_students = site.data.students %}

# Alumni

Ein Text der die Bedeutung des Alumni-Netzwerkes verdeutlicht und eventuell auf den Telegram-Kanal verweist.

{% for jahrgang in all_students %}
{% assign year = jahrgang[0] %}
<h2>Jahrgang {{ year }} - {{ year | plus: 2 }}</h2>
<ul>
{% for student in jahrgang[1] %}
<li itemscope itemtype="http://schema.org/Person"><span itemprop="name">{{ student.name }}</span>{% if student.references %} ({% for reference in student.references %}<a itemprop="sameAs" href="{{ reference.url }}">{{ reference.handle }}</a>{% if forloop.last == false %}, {% endif %}{% endfor %}){% endif %}
{% if student.description %}<p>{{ student.description }}</p>{% endif %}
</li>
{% endfor %}
</ul>
{% endfor %}
