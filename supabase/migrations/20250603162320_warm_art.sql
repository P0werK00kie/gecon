/*
  # Service Forms Tables

  1. New Tables
    - tree_service_requests
    - disaster_recovery_requests  
    - civil_construction_requests
    - demolition_requests
    - commercial_roofing_requests
    - residential_roofing_requests

  2. Security
    - Enable RLS on all tables
    - Add policies for public form submissions
    - Add policies for authenticated users to view their submissions
*/

-- Tree Service Requests
CREATE TABLE IF NOT EXISTS tree_service_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE tree_service_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert tree service requests"
  ON tree_service_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view their own tree service requests"
  ON tree_service_requests
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE auth.users.email = tree_service_requests.email
  ));

-- Disaster Recovery Requests
CREATE TABLE IF NOT EXISTS disaster_recovery_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE disaster_recovery_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert disaster recovery requests"
  ON disaster_recovery_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view their own disaster recovery requests"
  ON disaster_recovery_requests
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE auth.users.email = disaster_recovery_requests.email
  ));

-- Civil Construction Requests
CREATE TABLE IF NOT EXISTS civil_construction_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text NOT NULL,
  project_details text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE civil_construction_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert civil construction requests"
  ON civil_construction_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view their own civil construction requests"
  ON civil_construction_requests
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE auth.users.email = civil_construction_requests.email
  ));

-- Demolition Requests
CREATE TABLE IF NOT EXISTS demolition_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text NOT NULL,
  project_details text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE demolition_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert demolition requests"
  ON demolition_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view their own demolition requests"
  ON demolition_requests
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE auth.users.email = demolition_requests.email
  ));

-- Commercial Roofing Requests
CREATE TABLE IF NOT EXISTS commercial_roofing_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  address text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  insurance_company text NOT NULL,
  comments text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE commercial_roofing_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert commercial roofing requests"
  ON commercial_roofing_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view their own commercial roofing requests"
  ON commercial_roofing_requests
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE auth.users.email = commercial_roofing_requests.email
  ));

-- Residential Roofing Requests
CREATE TABLE IF NOT EXISTS residential_roofing_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  address text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  insurance_company text NOT NULL,
  comments text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE residential_roofing_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert residential roofing requests"
  ON residential_roofing_requests
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view their own residential roofing requests"
  ON residential_roofing_requests
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE auth.users.email = residential_roofing_requests.email
  ));