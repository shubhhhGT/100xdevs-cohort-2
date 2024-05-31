function dateHandler() {
  const date = new Date();
  const hours = date.getHours();
  const mins = date.getMinutes();
  const secs = date.getSeconds();

  const time24format = `${hours} : ${mins} : ${secs}`;

  const ampm = hours > 12 ? "PM" : "AM";

  const time12format = `${hours % 12} : ${mins} : ${secs} ${ampm}`;

  console.log(time24format);
  console.log(time12format);
}

setInterval(dateHandler, 1000);
