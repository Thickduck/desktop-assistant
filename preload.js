const NOTIFICATION_TITLE = "Remainder";
const NOTIFICATION_BODY = "A remainder to complete your task.";
const CLICK_MESSAGE = "Notification clicked!";

new Notification(NOTIFICATION_TITLE, { body: NOTIFICATION_BODY }).onclick =
  () => (document.getElementById("output").innerText = CLICK_MESSAGE);
