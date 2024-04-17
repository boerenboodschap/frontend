# boerenboodschap frontend

A nextjs applicaton for the BoerenBoodschap project. This reads from and writes data to the [Api Gateway](https://github.com/boerenboodschap/gateway) or the [Monolith API](https://github.com/boerenboodschap/monolith).

https://www.gradientmagic.com/collection/lightbg/gradient/1583799604316

## TODO

### Nu

- Data uit session cookie halen.
- Authenticated request maken naar directus (voor het maken van een farm bijvoorbeeld).
- Mijn boerderij functionaliteiten maken.

### Later

- Email implementatie

## Requirements

### Home

- [ ] location and radius input
- [ ] Farms in my area
- [ ] Toggle button to switch to products in my area
- [ ] Filter on dairy, vegetables etc

### Farm

- [ ] Create a farm - One farm for one account max.
- [ ] Edit my farm
- [ ] Load farms in map with marker

### Account

When logging in you should get a customer account by default that can save favorites and a order history (disabled by default).

### Information

- [ ] About page
- [ ] Vision page
- [ ] GDPR page (privacy)

### Features

- [ ] Image uploads for farms and products.
- [ ] Favorites
- [ ] Reviews
- [ ] Chats

### Route planning

- [ ] Input your usual grocery store and create a pathfinding algorithm that plans a route with farms along the way to satisfy parts of the shopping list.
