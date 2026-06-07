# Cloudflare D1 Database Setup

This project is configured to use Cloudflare D1 for storing contact form inquiries.

## Setup Instructions

### 1. Create the D1 Database

```bash
npx wrangler d1 create ecofiberbd
```

This will output a database ID. Update `wrangler.toml` with the returned ID:

```toml
[[d1_databases]]
binding = "DB"
database_name = "ecofiberbd"
database_id = "YOUR_DATABASE_ID_HERE"
```

### 2. Run Migrations

Create the inquiries table:

```bash
npx wrangler d1 execute ecofiberbd --file=migrations/0001_create_inquiries.sql
```

### 3. Deploy to Production

```bash
npm run build
npx wrangler deploy
```

## Database Schema

### Inquiries Table

| Column | Type | Description |
|--------|------|-------------|
| id | INTEGER | Primary key, auto-increment |
| name | TEXT | Inquirer's full name |
| email | TEXT | Inquirer's email address |
| phone | TEXT | Inquirer's phone (optional) |
| country | TEXT | Country of inquiry |
| product | TEXT | Product of interest |
| message | TEXT | Inquiry message |
| status | TEXT | Status (new, read, replied) |
| created_at | DATETIME | Timestamp when created |
| updated_at | DATETIME | Timestamp when updated |

## API Endpoints

### POST /api/inquiries

Submit a new contact form inquiry.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "country": "United States",
  "product": "Grade A Premium Banana Fiber",
  "message": "I would like to inquire about bulk pricing..."
}
```

**Response:**
```json
{
  "success": true,
  "id": 1,
  "message": "Thank you! Your inquiry has been received..."
}
```

## Local Development

To test locally with D1:

```bash
npx wrangler d1 execute ecofiberbd --file=migrations/0001_create_inquiries.sql --local
```

## Admin Access

To retrieve all inquiries (requires authentication):

```bash
curl "https://ecofiberbd.com/api/inquiries?key=YOUR_ADMIN_KEY"
```

Set `ADMIN_KEY` environment variable in `wrangler.toml`:

```toml
vars = { ADMIN_KEY = "your-secret-key-here" }
```

## Notes

- All form submissions are stored in D1
- Inquiries are marked as 'new' when first created
- Update the `status` field as you process inquiries
- Consider adding email notifications via SendGrid, Mailgun, or similar service
- Add proper authentication for admin endpoints in production
