--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

--
-- Name: guest_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE guest_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE guest_id_seq OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: guest; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE guest (
    id integer DEFAULT nextval('guest_id_seq'::regclass) NOT NULL,
    first_name character varying(50) NOT NULL,
    last_name character varying(50) NOT NULL,
    email character varying(254) NOT NULL,
    password character varying(255) NOT NULL,
    date_updated integer NOT NULL,
    date_added integer NOT NULL
);


ALTER TABLE guest OWNER TO postgres;

--
-- Data for Name: guest; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY guest (id, first_name, last_name, email, password, date_updated, date_added) FROM stdin;
6	naruto	uzumaki	him@him.com	$2a$10$7DHzQ0xZEYWQjQAMUuRPpOg1YxcR/VbpmUJARNRtV8uMNiB/IRECa	1234	1234
\.


--
-- Name: guest_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('guest_id_seq', 1, false);


--
-- Name: guest guest_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY guest
    ADD CONSTRAINT guest_email_key UNIQUE (email);


--
-- Name: guest guest_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY guest
    ADD CONSTRAINT guest_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

