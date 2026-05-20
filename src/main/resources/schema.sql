
CREATE TABLE IF NOT EXISTS experiences (
    id SERIAL PRIMARY KEY,
    company VARCHAR(255) NOT NULL,
    role_en VARCHAR(255) NOT NULL,
    role_fr VARCHAR(255) NOT NULL,
    description_en TEXT,
    description_fr TEXT,
    start_date DATE NOT NULL,
    end_date DATE,
    location VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS projects (
    id SERIAL PRIMARY KEY,
    title_en VARCHAR(255) NOT NULL,
    title_fr VARCHAR(255) NOT NULL,
    description_en TEXT,
    description_fr TEXT,
    image_url VARCHAR(500),
    github_link VARCHAR(500),
    live_link VARCHAR(500)
);

CREATE TABLE IF NOT EXISTS project_technologies (
    project_id INTEGER REFERENCES projects(id) ON DELETE CASCADE,
    technology VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS education (
    id SERIAL PRIMARY KEY,
    school_en VARCHAR(255) NOT NULL,
    school_fr VARCHAR(255) NOT NULL,
    degree_en VARCHAR(255),
    degree_fr VARCHAR(255),
    field_of_study_en VARCHAR(255),
    field_of_study_fr VARCHAR(255),
    start_date DATE,
    end_date DATE,
    gpa NUMERIC(3, 2)
);

CREATE TABLE IF NOT EXISTS skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    proficiency INTEGER CHECK (proficiency >= 0 AND proficiency <= 100),
    category VARCHAR(100)
);

CREATE TABLE IF NOT EXISTS testimonials (
    id SERIAL PRIMARY KEY,
    author_name VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    approval_status VARCHAR(50) DEFAULT 'PENDING',
    CONSTRAINT check_approval_status CHECK (approval_status IN ('APPROVED', 'PENDING', 'REFUSED'))
);

CREATE TABLE IF NOT EXISTS hobbies (
    id SERIAL PRIMARY KEY,
    name_en VARCHAR(255),
    name_fr VARCHAR(255),
    description_en TEXT,
    description_fr TEXT,
    icon_url VARCHAR(500)
);

CREATE TABLE IF NOT EXISTS messages (
    id SERIAL PRIMARY KEY,
    sender_name VARCHAR(255) NOT NULL,
    sender_email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    content TEXT NOT NULL,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS about (
    id SERIAL PRIMARY KEY,
    content_en TEXT NOT NULL,
    content_fr TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS resumes (
    id SERIAL PRIMARY KEY,
    -- Bilingual fields
    title_en VARCHAR(255),
    description_en TEXT,
    filename_en VARCHAR(255),
    file_type_en VARCHAR(100),
    data_en BYTEA,
    
    title_fr VARCHAR(255),
    description_fr TEXT,
    filename_fr VARCHAR(255),
    file_type_fr VARCHAR(100),
    data_fr BYTEA,
    
    -- Legacy single-language fields (backward compatibility)
    filename VARCHAR(255),
    file_type VARCHAR(100),
    data BYTEA
);