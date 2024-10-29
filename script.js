async function downloadClip() {
  const url = document.getElementById("url").value;
  const start = document.getElementById("start").value;
  const end = document.getElementById("end").value;
  const status = document.getElementById("status");

  status.textContent = "Processing request...";

  try {
    const response = await fetch("https://your-backend-url.up.railway.app/download", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ url, start, end })
    });

    if (response.ok) {
      const data = await response.json();
      status.innerHTML = `<a href="${data.downloadUrl}" download>Click here to download your clip</a>`;
    } else {
      throw new Error("Failed to fetch the clip.");
    }
  } catch (error) {
    console.error(error);
    status.textContent = "An error occurred. Please check the link and timestamps.";
  }
}
