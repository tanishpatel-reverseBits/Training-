// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");

function toggleSidebar() {
  sidebar.classList.toggle("-translate-x-full");
  sidebarOverlay.classList.toggle("hidden");
  const isExpanded = !sidebar.classList.contains("-translate-x-full");
  menuToggle.setAttribute("aria-expanded", isExpanded);
}

menuToggle.addEventListener("click", toggleSidebar);
sidebarOverlay.addEventListener("click", toggleSidebar);

// // Table Sorting
// const tableBody = document.getElementById("tableBody");
// const sortButtons = document.querySelectorAll(".sortable");
// let currentSort = { column: null, direction: "asc" };

// // Sample data for sorting
// const tableData = [
//   {
//     id: 12845,
//     customer: "Sarah Johnson",
//     email: "sarah.j@email.com",
//     amount: 245.0,
//     status: "Completed",
//     date: "2025-12-18",
//   },
//   {
//     id: 12844,
//     customer: "Michael Chen",
//     email: "m.chen@email.com",
//     amount: 189.5,
//     status: "Pending",
//     date: "2025-12-18",
//   },
//   {
//     id: 12843,
//     customer: "Emma Davis",
//     email: "emma.d@email.com",
//     amount: 532.0,
//     status: "Completed",
//     date: "2025-12-17",
//   },
//   {
//     id: 12842,
//     customer: "James Wilson",
//     email: "j.wilson@email.com",
//     amount: 95.0,
//     status: "Failed",
//     date: "2025-12-17",
//   },
//   {
//     id: 12841,
//     customer: "Lisa Anderson",
//     email: "lisa.a@email.com",
//     amount: 378.25,
//     status: "Completed",
//     date: "2025-12-16",
//   },
// ];

// sortButtons.forEach((button) => {
//   button.addEventListener("click", function () {
//     const column = this.dataset.column;

//     // Update sort direction
//     if (currentSort.column === column) {
//       currentSort.direction = currentSort.direction === "asc" ? "desc" : "asc";
//     } else {
//       currentSort.column = column;
//       currentSort.direction = "asc";
//     }

//     // Update UI for sort indicators
//     sortButtons.forEach((btn) => {
//       btn.classList.remove("text-white");
//       btn.classList.add("text-gray-400");
//     });
//     this.classList.remove("text-gray-400");
//     this.classList.add("text-white");

//     // Sort the data
//     const sortedData = [...tableData].sort((a, b) => {
//       let aVal = a[column];
//       let bVal = b[column];

//       if (column === "amount") {
//         return currentSort.direction === "asc" ? aVal - bVal : bVal - aVal;
//       }

//       if (typeof aVal === "string") {
//         return currentSort.direction === "asc"
//           ? aVal.localeCompare(bVal)
//           : bVal.localeCompare(aVal);
//       }

//       return currentSort.direction === "asc" ? aVal - bVal : bVal - aVal;
//     });

//     // Render sorted table
//     renderTable(sortedData);
//   });
// });

// function renderTable(data) {
//   tableBody.innerHTML = data
//     .map(
//       (row) => `
//         <tr class="hover:bg-gray-900/50 transition-colors">
//           <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">#${
//             row.id
//           }</td>
//           <td class="px-6 py-4 whitespace-nowrap">
//             <div class="flex items-center gap-3">
//               <img src="/placeholder.svg?height=32&width=32" alt="" class="w-8 h-8 rounded-full">
//               <div>
//                 <p class="text-sm font-medium">${row.customer}</p>
//                 <p class="text-xs text-gray-500">${row.email}</p>
//               </div>
//             </div>
//           </td>
//           <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">$${row.amount.toFixed(
//             2
//           )}</td>
//           <td class="px-6 py-4 whitespace-nowrap">
//             <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass(
//               row.status
//             )}">
//               ${row.status}
//             </span>
//           </td>
//           <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400">${formatDate(
//             row.date
//           )}</td>
//           <td class="px-6 py-4 whitespace-nowrap text-right text-sm">
//             <button class="text-blue-500 hover:text-blue-400 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded" aria-label="View transaction details">View</button>
//           </td>
//         </tr>
//       `
//     )
//     .join("");
// }

// function getStatusClass(status) {
//   switch (status) {
//     case "Completed":
//       return "bg-green-500/10 text-green-500";
//     case "Pending":
//       return "bg-yellow-500/10 text-yellow-500";
//     case "Failed":
//       return "bg-red-500/10 text-red-500";
//     default:
//       return "bg-gray-500/10 text-gray-500";
//   }
// }

// function formatDate(dateString) {
//   const date = new Date(dateString);
//   return date.toLocaleDateString("en-US", {
//     month: "short",
//     day: "numeric",
//     year: "numeric",
//   });
// }

// // Filter Application
// const applyFiltersBtn = document.getElementById("applyFilters");
// applyFiltersBtn.addEventListener("click", function () {
//   const dateRange = document.getElementById("dateRange").value;
//   const category = document.getElementById("category").value;
//   const status = document.getElementById("status").value;

//   console.log("Filters applied:", { dateRange, category, status });

//   // Visual feedback
//   this.textContent = "Filters Applied!";
//   this.classList.add("bg-green-600");
//   this.classList.remove("bg-blue-600");

//   setTimeout(() => {
//     this.textContent = "Apply Filters";
//     this.classList.remove("bg-green-600");
//     this.classList.add("bg-blue-600");
//   }, 1500);
// });

// // Animate progress bars on load
// window.addEventListener("load", function () {
//   const progressBars = document.querySelectorAll(".progress-bar-fill");
//   progressBars.forEach((bar) => {
//     const width = bar.style.width;
//     bar.style.width = "0%";
//     setTimeout(() => {
//       bar.style.width = width;
//     }, 100);
//   });
// });

// // Keyboard Navigation for Sidebar
// sidebar.addEventListener("keydown", function (e) {
//   if (e.key === "Escape") {
//     toggleSidebar();
//     menuToggle.focus();
//   }
// });
