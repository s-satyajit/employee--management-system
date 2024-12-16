const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Complete Report",
        description: "Prepare the quarterly financial report.",
        date: "2024-12-15",
        category: "Finance",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Discuss project milestones.",
        date: "2024-12-16",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix Bug #123",
        description: "Resolve the issue causing the server crash.",
        date: "2024-12-14",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Client Presentation",
        description: "Prepare slides for the client meeting.",
        date: "2024-12-12",
        category: "Sales",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Code Review",
        description: "Review the pull requests for the new feature.",
        date: "2024-12-13",
        category: "Development",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Update Documentation",
        description: "Update API documentation with the latest changes.",
        date: "2024-12-14",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Database Backup",
        description: "Perform a full database backup.",
        date: "2024-12-12",
        category: "IT",
        active: false,
        newTask: true,
        completed: true,
        failed: false,
      },
      {
        title: "Security Audit",
        description: "Conduct an internal security audit.",
        date: "2024-12-15",
        category: "Security",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Prototype",
        description: "Create a prototype for the new landing page.",
        date: "2024-12-14",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        title: "Social Media Plan",
        description: "Draft a social media strategy for next month.",
        date: "2024-12-16",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        title: "Fix Email Bug",
        description: "Resolve email notification errors.",
        date: "2024-12-13",
        category: "Development",
        active: true,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Inventory Check",
        description: "Perform an inventory audit.",
        date: "2024-12-12",
        category: "Logistics",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        title: "Prepare Training Material",
        description: "Develop materials for the upcoming training session.",
        date: "2024-12-14",
        category: "HR",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return {employees, admin}
};
