export function handleError(error) {
  if (error.message.includes("NetworkError")) {
    alert("Network error: Please check your internet connection.");
  } else {
    alert(error.message);
  }
  console.error("Error:", error);
}
