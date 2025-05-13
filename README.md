#Barbeque Nation Inbound Enquiry and Booking Chatbot
##Purpose
The primary purpose of this project is to implement an inbound enquiry and booking chatbot for Barbeque Nation, which will handle:

Frequently Asked Questions (FAQs)

New bookings

Updates and cancellations for bookings for Barbeque Nation outlets in Delhi and Bangalore.

This system provides a seamless and automated way for customers to interact with the Barbeque Nation service.

System Breakdown
Components:
State Prompt

Represents the context or instruction at any given point in the conversation.

The system has multiple states, with only one state being active at any given time.

Each state prompt requires filling in templates with variables, entities, and tools that guide the conversational flow.

State Transition Prompt

A predefined instruction or template used to move from one state to another based on user input.

Ensures smooth progression through the conversation based on the user's intent.

Knowledge Base

A structured collection of domain-specific information, such as FAQs, product manuals, and property details.

The chatbot uses this knowledge base to generate relevant responses to user queries.

Post-Call Configuration (BONUS)

Involves analyzing and extracting insights from the completed conversation.

Provides metrics like user satisfaction, intent fulfillment, response accuracy, and conversation flow to help improve the system's performance.

Chatbot (BONUS)

Reverse-engineers the API endpoints from beta.retellai.com to create a custom frontend UI for the chatbot.

Hosts the chatbot for demonstration purposes.

Functional Requirements
Fork and Clone the Repository
Fork the templates and methods shared in the agentops-template-repo to complete the API endpoints for the Knowledge Base, Chatbot, and Post-Call Configuration.

Use the Conversational Flow Diagram and State Template Diagram to build the steps for the conversation flow.

Create State Transition Prompts to guide the conversation flow correctly.

Convert the raw knowledge base shared by the business into a structured knowledge base format.

Host the API endpoints for the knowledge base and the phone number for conversational flow.

BONUS Functional Requirements
Post-Call Analysis: Extract insights like user satisfaction, response accuracy, and conversation flow from the interaction data.

Chatbot Creation: Reverse-engineer the API endpoints of beta.retellai.com to create a chatbot and host it with your own frontend UI.

Configuration Required
Node.js (for running the server)

Express.js (for building the API)

Body-Parser (for parsing incoming request bodies)

dotenv (for managing environment variables)

RetellAI (for creating and hosting the chatbot)

API Endpoints for Knowledge Base: To be configured in the app.js file for knowledge handling.

Architecture Overview
This system consists of the following main components:

Frontend:

A simple user interface for interacting with the chatbot, built using the RetellAI platform and custom frontend technologies.

Backend:

The Express.js server handles API requests for knowledge base queries, new bookings, updates, and cancellations.

Integrates with the Knowledge Base API and routes for handling FAQ queries.

Knowledge Base:

A structured set of information (e.g., FAQs) that the chatbot uses to generate relevant answers.

Post-Call Analysis (BONUS):

Evaluates the chatbot interaction and extracts key metrics to improve the chatbot’s performance over time.







