---
title: Alumni
exclude: true
footer: true
---

{% assign all_students = site.data.students | sort %}

# Alumni

Ein Text der die Bedeutung des Alumni-Netzwerkes verdeutlicht und eventuell auf den Telegram-Kanal verweist.

{% for jahrgang in all_students reversed %}
<section>
{% assign year = jahrgang[0] %}
<h2>Jahrgang {{ year }} - {{ year | plus: 2 }}</h2>
{% if jahrgang[1].description %}<p>{{ jahrgang[1].description }}</p>{% endif %}
<ul>
{% for student in jahrgang[1].students %}
<li itemscope itemtype="http://schema.org/Person"><link itemprop="alumniOf" href="{{ site.url }}/#organization" /><span itemprop="name">{{ student.name }}</span>{% if student.references %} ({% for reference in student.references %}<a itemprop="sameAs" href="{{ reference.url }}">{{ reference.handle }}</a>{% if forloop.last == false %}, {% endif %}{% endfor %}){% endif %}
{% if student.description %}<p>{{ student.description }}</p>{% endif %}
</li>
{% endfor %}
</ul>
</section>
{% endfor %}
