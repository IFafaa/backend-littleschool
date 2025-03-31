# Coupling and Cohesion Example

Observe the code below:

![High Coupling and Low Cohesion](auth-service.jpg)  
*Figure 1: Print illustrating high coupling and low cohesion.*

---

### Analysis

#### Coupling

In the example above, the **authentication service** has multiple dependencies on other services, such as email, messaging, and payment. This creates **tight coupling**, making the code harder to maintain and extend. A better approach would be to depend on **interfaces**, promoting modularity and flexibility.

#### Cohesion

The same authentication service is responsible for multiple unrelated tasks, such as:  
- Registering user data (`registerData`, `registerAddress`)  
- Sending verification emails (`sendVerificationEmail`)  
- Managing user plan payments  

This violates the **cohesion principle**, as the service handles responsibilities that should be separated into distinct modules.

---

