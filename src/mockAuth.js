export function mockLogin(email) {
    if (email === "admin@example.com") return { role: "admin", name: "Admin" };
    if (email === "teacher@example.com") return { role: "teacher", name: "Teacher" };
    return null;
  }
  