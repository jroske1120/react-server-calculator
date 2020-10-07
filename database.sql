--Have db set up in Postgres as "sezzle_calculator"

CREATE TABLE "history" (
    "id" SERIAL PRIMARY KEY,
    "calculation" TEXT NOT NULL,
);