export const dummyWarranties = {
  "REN-2026": {
    isActive: true,
    product: "Renergy Mono-Crystal Gen 3",
    expiry: "Oct 12, 2046",
    daysLeft: "7,420",
    coverage: "Full Performance & Hardware",
    purchaseDate: "Oct 12, 2021",
    // Claim History Data
    claims: [
      { id: "CLM-882", date: "Jan 15, 2024", type: "Inverter Check", status: "Resolved" },
      { id: "CLM-910", date: "Mar 02, 2025", type: "Panel Cleaning", status: "Completed" }
    ]
  },
  "REN-EXPIRED": {
    isActive: false,
    product: "Renergy Eco-Panel v1",
    expiry: "Jan 01, 2024",
    daysLeft: "0",
    coverage: "Limited Hardware",
    purchaseDate: "Jan 01, 2014",
    claims: []
  }
};