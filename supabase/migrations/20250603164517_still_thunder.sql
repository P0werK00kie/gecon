/*
  # Create newsletter subscribers table
  
  1. New Tables
    - newsletter_subscribers
      - id (uuid, primary key)
      - email (text, unique)
      - created_at (timestamp)
      
  2. Security
    - Enable RLS
    - Add policy for public inserts
    - Add policy for authenticated users to view their own subscriptions
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view their own subscriptions"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE auth.users.email = newsletter_subscribers.email
  ));