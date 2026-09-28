# Grok Imagine 1.5 Ext — реверс-инжиниринг route (Русский)

> **1K $0.015** · model ID `grok-imagine-1.5-apimart` · **реверс-инжиниринг/reverse-engineered** route.

**[Смотреть цены](https://go.apimart.ai/k-34d281)** · **[Получить API-ключ](https://go.apimart.ai/k-c79a31)**

grok-imagine-1.5-ext-reverse-api-ru — маршрут **реверс-инжиниринг** для Grok Imagine 1.5 Ext: вызываемый ID `grok-imagine-1.5-apimart`, работает параллельно официальному маршруту (`grok-imagine-image`) по более низкой цене.

## Pricing (snapshot 2026-09-28)

| Tier | Price |
| --- | --- |
| `1K` | $0.015 |

Prices are per delivered image; `n` in the request multiplies the total. Snapshot date **2026-09-28** — the live pricing page is authoritative.

## Quickstart

```bash
curl -X POST https://api.apimart.ai/v1/images/generations \
  -H 'Authorization: Bearer $APIMART_KEY' \
  -H 'Content-Type: application/json' \
  -d '{"model":"grok-imagine-1.5-apimart","prompt":"cozy reading nook, warm lamp, cinematic","size":"1:1","resolution":"1K","n":1}'
```

Async: submit → get `task_id` → poll `GET https://api.apimart.ai/v1/tasks/<task_id>` → read `cost` / `credits_cost` from the result. Parameter tables, `version`/`resolution`/`size` options and idempotency headers are documented on the model page reachable from the pricing link above.

## Reverse vs official route

| Route | Callable ID | Price |
| --- | --- | --- |
| **реверс-инжиниринг** | `grok-imagine-1.5-apimart` | 1K $0.015 |
| официальная маршрутизация | `grok-imagine-image` | official list price, billed at ×0.8 group ratio |


## Keywords

`grok-imagine-1.5-ext` · `grok-imagine-1.5-apimart` · `реверс-инжиниринг` · `reverse-engineered` · `API шлюз` · `API релей` · `nano banana 2 api` · `gpt-image-2.5 api` · `ai api pricing` · `pay-as-you-go`

## Platform facts

- USD settlement, pay-as-you-go, **$1 minimum top-up**, no subscription.
- Operating since last year; ~100,000 registered users, mostly enterprise accounts.
- International invoices available on request.
- 307 models online (live `/v1/models`) as of 2026-09-28.

## Disclosure

This repository documents **APIMart**, a third-party API aggregator/gateway. It is **not affiliated with, endorsed by, or sponsored by** OpenAI, Google, Anthropic, xAI, ByteDance or any model vendor. Model names and trademarks belong to their owners. Prices are a point-in-time snapshot and may change; the vendor's console billing is authoritative.

