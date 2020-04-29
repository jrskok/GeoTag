const {
  Stitch,
  RemoteMongoClient,
  UserPasswordCredential
} = stitch;

const stitchClient = Stitch.initializeDefaultAppClient("stitch-quickstarts-zhpox");

login("jrs222@gmail.com", "786yhikhj87").then(() => {
  // Initialize a MongoDB Service Client
  const mongodb = stitchClient.getServiceClient(
    RemoteMongoClient.factory,
    "mongodb-atlas"
  );
  // Get a hook to the employees collection
  const employees = mongodb.db("geotagscience").collection("locations");
  
  return employees.find({}, {
    // limit: 3,
    // sort: { "salary": -1 }
  })
    .asArray();
})
  .then(displayEmployees)

function login(email, password) {
  const credential = new UserPasswordCredential(email, password);
  return stitchClient.auth.loginWithCredential(credential);
}


// Renders the the employees' information in the table
function displayEmployees(employees) {
  const employeesTableBody = document.getElementById("locations");
  const numResultsEl = document.getElementById("NAME");
  const tableRows = employees.map(employee => {
    return `
      <tr>
        <td>${employee.NAME}, 
      </tr>
    `;
  });
  employeesTableBody.innerHTML = tableRows.join("");
  numResultsEl.innerHTML = employees.length;
}
