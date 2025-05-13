# 🤖 **Barbeque Nation Inbound Enquiry and Booking Chatbot**

## 🎯 **Purpose**
The primary goal of this project is to implement an **inbound enquiry and booking chatbot** for **Barbeque Nation**, capable of handling:

- ✅ **Frequently Asked Questions (FAQs)**
- 📅 **New bookings**
- 🔁 **Booking updates and cancellations**

For **Barbeque Nation outlets in Delhi and Bangalore**, this chatbot ensures a **seamless and automated customer experience**. 💬

---

## 🧩 **System Breakdown**

### 🧠 **State Prompt**
- Represents the **context or instruction** at any point in the conversation.
- The system has **multiple states**, with **only one active** at a time.
- Each state prompt is a **template** filled with variables, entities, and tools to drive the flow.

### 🔀 **State Transition Prompt**
- A predefined instruction or template to **move between states** based on user input.
- Ensures **smooth conversation flow** by guiding transitions when tasks are completed.

### 📚 **Knowledge Base**
- A **structured collection** of domain-specific info like FAQs, policies, and property data.
- Used to generate **accurate and context-aware** chatbot responses.

### 📊 **Post-Call Configuration (BONUS)**
- **Analyzes completed conversations** to extract:
  - User satisfaction
  - Intent fulfillment
  - Response accuracy
  - Conversation flow
- Used for **improving system performance**.

### 💻 **Chatbot (BONUS)**
- **Reverse-engineers API endpoints** from `beta.retellai.com`.
- Builds a **custom frontend UI** for the chatbot.
- Hosted for **demonstration purposes**.

---

## ✅ **Functional Requirements**

### 🔧 **Fork and Clone the Repository**
- Fork: [agentops-template-repo](https://github.com/AryamannNingombam/agentops-template-repo)
- Complete the API endpoints for:
  - 📚 **Knowledge Base**
  - 🧠 **Chatbot**
  - 📈 **Post-Call Configuration**

### 🗺️ **Build Conversation Flow**
- Use the **Conversational Flow Diagram** and **State Template Diagram**.
- Write **State Transition Prompts** to guide the chatbot properly.
- Convert the **raw knowledge base** into a structured format.

### 🌐 **Host API Endpoints**
- Host endpoints for the **knowledge base** and **phone number integration** for conversation flow.

---

## 🚀 **BONUS Functional Requirements**
- 📊 **Post-Call Analysis**: Extract insights such as user satisfaction and intent fulfillment.
- 🤖 **Chatbot Creation**: Reverse-engineer `beta.retellai.com` APIs and host your own chatbot frontend.

---

## ⚙️ **Configuration Required**
- **Node.js** – Server runtime
- **Express.js** – API development
- **body-parser** – Handle incoming JSON
- **dotenv** – Environment variable management
- **RetellAI** – State machine and chatbot hosting

---

## 🏗️ **Architecture Overview**

### 🖥️ **Frontend**
- Built using **RetellAI + custom UI**
- Interface for customer interactions

### 🛠️ **Backend**
- Built with **Express.js**
- Handles:
  - Knowledge base queries
  - Bookings, updates, and cancellations

### 📚 **Knowledge Base**
- Structured FAQs and property info used by the chatbot for accurate responses

### 📈 **Post-Call Analysis (BONUS)**
- Monitors and reports:
  - Task completion
  - User sentiment
  - Accuracy metrics

---

