# Zen Eco Homes

Public website and client portal for Zen Eco Homes.

## Architecture

- `public_html/` is the web root that should be deployed to the hosting account.
- RealtyFlow remains the CRM, property, content and automation system.
- Zen Eco Homes receives website leads locally and forwards them to RealtyFlow.
- Admin can pull active properties from RealtyFlow through `public_html/sync-realtyflow.php`.

## Local/Production Config

Never put real credentials in `public_html/config.php`.

Create `config.local.php` one level above `public_html`:

```bash
cp config.local.example.php config.local.php
```

Then fill in database credentials and API keys. `config.local.php` is ignored by Git.

## RealtyFlow Integration

Current integration points:

- Leads: `public_html/api.php` stores the lead locally and forwards it to `https://realtyflow.chatgenius.pro/api/contacts`.
- Chatbot: `public_html/includes/footer.php` embeds the RealtyFlow chatbot with `data-brand="zeneco"`.
- Properties: `public_html/sync-realtyflow.php` imports/upserts properties from RealtyFlow into the local `properties` table. This endpoint requires admin login.

## Security Notes

- Customer login uses a 6-digit email code stored as a hash in `client_login_tokens`.
- Admin login still depends on the existing `admins` table and `password_verify`.
- Rotate any credentials that have previously been stored in public files.
