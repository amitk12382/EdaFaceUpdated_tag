import Footer2 from "./footer2";
import Nav from "./nav";

const SOCScorecard = () => {
  return (
    <>
      <Nav></Nav>
      <div className="container col-xxl-8 px-4 py-5 resources">
        <section className="mt-4">
          <div className="container-fluid">
            <div className="row">
              <h3 className="token-header">
                The following Table summarizes EdaFace SOC Scorecard for Rugpull
                Detection
              </h3>
              <div className="col">
                <div className="card shadow">
                  <div className="card-header py-2">
                    <p
                      className="lead text-info m-0"
                      style={{ color: "#26b6d4" }}
                    >
                      <strong>
                        Table 1: SOC Scorecard for Rugpull Detection
                      </strong>
                      <br />
                    </p>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive table mb-0 pt-3 pe-2">
                      <table className="table table-striped table-sm my-0 mydatatable">
                        <thead>
                          <tr>
                            <th
                              className="text-center"
                              style={{ textAlign: "center" }}
                              colSpan={3}
                            >
                              SOC Item
                            </th>
                            <th
                              className="text-center"
                              style={{ textAlign: "center" }}
                              colSpan={3}
                            >
                              Type of Verification
                            </th>
                            <th
                              className="text-center"
                              style={{ textAlign: "center" }}
                            >
                              Scorecard
                              <br />
                            </th>
                            <th className="text-center">
                              Confirmation Type
                              <br />
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <strong>Item</strong>
                            </td>
                            <td className="text-center" colSpan={2}>
                              <strong>Evaluation Feature</strong>
                              <br />
                            </td>
                            <td className="text-center">
                              <strong>LinkedIn</strong>
                            </td>
                            <td className="text-center">
                              <strong>ID</strong>
                            </td>
                            <td className="text-center">
                              <strong>Facial</strong>
                            </td>
                            <td className="text-center">
                              <strong>Total Score</strong>
                            </td>
                            <td />
                          </tr>
                          <tr>
                            <td rowSpan={10}>
                              Item 1: Project Team
                              <br />
                            </td>
                            <td rowSpan={7}>Names of Project Team Members</td>
                            <td>Founder </td>
                            <td>0.1</td>
                            <td>
                              0.2
                              <br />
                            </td>
                            <td>0.2</td>
                            <td>0.5</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td>CTO</td>
                            <td>0.1</td>
                            <td>0.2</td>
                            <td>0.2</td>
                            <td>
                              0.5
                              <br />
                            </td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td>
                              CMO
                              <br />
                            </td>
                            <td>0.1</td>
                            <td>0.2</td>
                            <td>0.2</td>
                            <td>
                              0.5
                              <br />
                            </td>
                            <td>
                              Auto
                              <br />
                            </td>
                          </tr>
                          <tr>
                            <td>Chief Admin</td>
                            <td>0.1</td>
                            <td>0.2</td>
                            <td>0.2</td>
                            <td>
                              0.5
                              <br />
                            </td>
                            <td>
                              Auto
                              <br />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Head of Legal
                              <br />
                            </td>
                            <td>0.1</td>
                            <td>0.2</td>
                            <td>
                              0.2
                              <br />
                            </td>
                            <td>0.5</td>
                            <td>
                              Auto
                              <br />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Head of Finances
                              <br />
                            </td>
                            <td>0.1</td>
                            <td>0.2</td>
                            <td>
                              0.2
                              <br />
                            </td>
                            <td>0.5</td>
                            <td>
                              Auto
                              <br />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Chair BOD
                              <br />
                            </td>
                            <td>0.1</td>
                            <td>0.2</td>
                            <td>
                              0.2
                              <br />
                            </td>
                            <td>0.5</td>
                            <td>
                              Auto
                              <br />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Ownership renunciation
                              <br />
                            </td>
                            <td />
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>1.0</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td>
                              Website
                              <br />
                            </td>
                            <td />
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>0.5</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td>
                              Auditing
                              <br />
                            </td>
                            <td />
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>1.0</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td rowSpan={10}>
                              Item 2: Application Protocol
                              <br />
                              <br />
                            </td>
                            <td>Whitepaper</td>
                            <td />
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>0.5</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td rowSpan={5}>
                              Social Media
                              <br />
                            </td>
                            <td>
                              Facebook
                              <br />
                            </td>
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>0.1</td>
                            <td>Non-auto</td>
                          </tr>
                          <tr>
                            <td>Instagram</td>
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>0.1</td>
                            <td>
                              Non-auto
                              <br />
                            </td>
                          </tr>
                          <tr>
                            <td>Telegram</td>
                            <td />
                            <td />
                            <td>
                              <br />
                            </td>
                            <td>0.1</td>
                            <td>
                              Non-auto
                              <br />
                            </td>
                          </tr>
                          <tr>
                            <td>Twitter</td>
                            <td />
                            <td />
                            <td>
                              <br />
                            </td>
                            <td>0.1</td>
                            <td>
                              Non-auto
                              <br />
                            </td>
                          </tr>
                          <tr>
                            <td>Youtube</td>
                            <td />
                            <td />
                            <td>
                              <br />
                            </td>
                            <td>0.1</td>
                            <td>
                              Non-auto
                              <br />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Source Code
                              <br />
                            </td>
                            <td />
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>0.5</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td>
                              DeFi application
                              <br />
                            </td>
                            <td />
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>0.5</td>
                            <td>Non-auto</td>
                          </tr>
                          <tr>
                            <td>
                              Locked Liquidity
                              <br />
                            </td>
                            <td />
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>1.0</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td>
                              Time-Lock
                              <br />
                            </td>
                            <td />
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>0.5</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td rowSpan={3}>Item 3: Use Cases</td>
                            <td rowSpan={3}>Use Cases</td>
                            <td>Use Case 1</td>
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>0.5</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td>Use Case 2</td>
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>0.5</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td>Use Case 3</td>
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>0.5</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td rowSpan={5}>Item 4: Coin Supply</td>
                            <td rowSpan={5}>
                              Coin Supply
                              <br />
                            </td>
                            <td>
                              Max Supply
                              <br />
                            </td>
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>0.5</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td>
                              Burnt Amount
                              <br />
                            </td>
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>0.5</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td>
                              Total Coin Supply
                              <br />
                            </td>
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>0.5</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td>
                              Locked-up Amount
                              <br />
                            </td>
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>0.5</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td>
                              Circulating Supply
                              <br />
                            </td>
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>0.5</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td rowSpan={2}>
                              Item 5: Market Value
                              <br />
                            </td>
                            <td>
                              Cex and Dex Listing
                              <br />
                            </td>
                            <td>Price</td>
                            <td>
                              <br />
                            </td>
                            <td />
                            <td />
                            <td>0.5</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td>
                              Market Cap
                              <br />
                            </td>
                            <td>Market Cap</td>
                            <td>
                              <br />
                            </td>
                            <td />
                            <td />
                            <td>1.0</td>
                            <td>Auto</td>
                          </tr>
                          <tr>
                            <td>
                              <br />
                            </td>
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td />
                            <td />
                            <td />
                          </tr>
                          <tr>
                            <td
                              style={{ fontWeight: "bold", color: "#26b6d4" }}
                            >
                              Total
                              <br />
                            </td>
                            <td>
                              <br />
                            </td>
                            <td />
                            <td>
                              <br />
                            </td>
                            <td />
                            <td />
                            <td
                              style={{ fontWeight: "bold", color: "#26b6d4" }}
                            >
                              15
                            </td>
                            <td />
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer2></Footer2>
    </>
  );
};

export default SOCScorecard;
