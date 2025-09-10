function executaPrograma() {
  let barrel = 150;
  let barrelPrice = 81;

  let saudiWorkers = 126;
  let saudiSalary = 3850;
  let saudiProductionDay = 21796500;
  let saudiProductionMonth = saudiProductionDay * 30;
  let saudiNet = saudiProductionMonth / 150 * 81 - saudiSalary * saudiWorkers;

  let emiratesWorkers = 106;
  let emiratesSalary = 3249;
  let emiratesProductionDay = 19870950;
  let emiratesProductionMonth = emiratesProductionDay * 30;
  let emiratesNet = emiratesProductionMonth / 150 * 81 - emiratesSalary * emiratesWorkers;

  let omanWorkers = 97;
  let omanSalary = 1940;
  let omanProductionDay = 18296450;
  let omanProductionMonth = omanProductionDay * 30;
  let omanNet = omanProductionMonth / 150 * 81 - omanSalary * omanWorkers;

  let maxPlatform = Math.max(saudiNet, emiratesNet, omanNet);
  let totalNet = saudiNet + emiratesNet + omanNet;

  let role = document.getElementById("rol").value;
  let password = document.getElementById("contrasenya").value;
  let output = "";

  // Icons
  const icons = {
    "Aràbia Saudita": "<i class='fa-solid fa-oil-well' style='color:#0078d7'></i>",
    "Emirats Àrabs": "<i class='fa-solid fa-oil-well' style='color:#00bfae'></i>",
    "Oman": "<i class='fa-solid fa-oil-well' style='color:#f4b400'></i>"
  };

  if (role === "Aràbia Saudita") {
    if (password === "42193") {
      output += `${icons["Aràbia Saudita"]} <b>Hello Saudi Arabia Department</b><br>`;
      output += "The oil platform generated <b>" + (saudiProductionMonth / 150).toLocaleString() + "</b> barrels, which equals <b>" + (saudiProductionMonth / 150 * 81).toLocaleString() + "€</b> last month<br>";
      output += "The total payments to be made are <b>" + (saudiSalary * saudiWorkers).toLocaleString() + "€</b><br>";
      output += "Net profit after paying workers is <b>" + saudiNet.toLocaleString() + "€</b>";
    } else {
      output = "<span style='color:red;'>Incorrect password</span>";
    }
  } else if (role === "Emirats Àrabs") {
    if (password === "42173") {
      output += `${icons["Emirats Àrabs"]} <b>Hello United Arab Emirates Department</b><br>`;
      output += "The oil platform generated <b>" + (emiratesProductionMonth / 150).toLocaleString() + "</b> barrels, which equals <b>" + (emiratesProductionMonth / 150 * 81).toLocaleString() + "€</b> last month<br>";
      output += "The total payments to be made are <b>" + (emiratesSalary * emiratesWorkers).toLocaleString() + "€</b><br>";
      output += "Net profit after paying workers is <b>" + emiratesNet.toLocaleString() + "€</b>";
    } else {
      output = "<span style='color:red;'>Incorrect password</span>";
    }
  } else if (role === "Oman") {
    if (password === "73661") {
      output += `${icons["Oman"]} <b>Hello Oman Department</b><br>`;
      output += "The oil platform generated <b>" + (omanProductionMonth / 150).toLocaleString() + "</b> barrels, which equals <b>" + (omanProductionMonth / 150 * 81).toLocaleString() + "€</b> last month<br>";
      output += "The total payments to be made are <b>" + (omanSalary * omanWorkers).toLocaleString() + "€</b><br>";
      output += "Net profit after paying workers is <b>" + omanNet.toLocaleString() + "€</b>";
    } else {
      output = "<span style='color:red;'>Incorrect password</span>";
    }
  } else if (role === "CEO") {
    if (password === "HatimTalha123") {
      output += "<b><i class='fa-solid fa-crown' style='color:#0078d7'></i> Hello CEO</b><br>";
      output += "Here are the statistics for each of your oil platforms:<br><br>";
      output += `
      <table style="width:100%;border-collapse:collapse;">
        <thead>
          <tr style="background:#f2f2f2;">
            <th>Platform</th>
            <th>Generated</th>
            <th>Payments</th>
            <th>Net Profit</th>
          </tr>
        </thead>
        <tbody>
          <tr${maxPlatform === saudiNet ? " style='background:#e6f7ff;'" : ""}>
            <td>${icons["Aràbia Saudita"]} Saudi Arabia</td>
            <td><b>${(saudiProductionMonth / 150).toLocaleString()}</b> barrels<br><span style="color:#0078d7;"><b>${(saudiProductionMonth / 150 * 81).toLocaleString()}€</b></span></td>
            <td>${(saudiSalary * saudiWorkers).toLocaleString()}€</td>
            <td><b>${saudiNet.toLocaleString()}€</b></td>
          </tr>
          <tr${maxPlatform === emiratesNet ? " style='background:#e6fff7;'" : ""}>
            <td>${icons["Emirats Àrabs"]} United Arab Emirates</td>
            <td><b>${(emiratesProductionMonth / 150).toLocaleString()}</b> barrels<br><span style="color:#00bfae;"><b>${(emiratesProductionMonth / 150 * 81).toLocaleString()}€</b></span></td>
            <td>${(emiratesSalary * emiratesWorkers).toLocaleString()}€</td>
            <td><b>${emiratesNet.toLocaleString()}€</b></td>
          </tr>
          <tr${maxPlatform === omanNet ? " style='background:#fffbe6;'" : ""}>
            <td>${icons["Oman"]} Oman</td>
            <td><b>${(omanProductionMonth / 150).toLocaleString()}</b> barrels<br><span style="color:#f4b400;"><b>${(omanProductionMonth / 150 * 81).toLocaleString()}€</b></span></td>
            <td>${(omanSalary * omanWorkers).toLocaleString()}€</td>
            <td><b>${omanNet.toLocaleString()}€</b></td>
          </tr>
        </tbody>
      </table>
      <br>
      <b>Total net profit of all platforms: <span style="color:#0078d7;">${totalNet.toLocaleString()}€</span></b><br>
      <b>
        <i class="fa-solid fa-trophy" style="color:gold;"></i>
        Platform with the highest net profit: 
        ${
          maxPlatform === saudiNet
            ? "Saudi Arabia"
            : maxPlatform === emiratesNet
            ? "United Arab Emirates"
            : "Oman"
        }
        (<span style="color:green;">${maxPlatform.toLocaleString()}€</span>)
      </b>
      `;
    } else {
      output = "<span style='color:red;'>Incorrect password</span>";
    }
  } else {
    output = "<span style='color:red;'>Unrecognized role</span>";
  }

  document.getElementById("output").innerHTML = output;
}