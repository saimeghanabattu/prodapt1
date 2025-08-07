function DashBoard() {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2 style={styles.logo}>MyDashboard</h2>
        <ul style={styles.navList}>
          <li style={styles.navItem}>Home</li>
          <li style={styles.navItem}>Analytics</li>
          <li style={styles.navItem}>Reports</li>
          <li style={styles.navItem}>Settings</li>
        </ul>
      </div>

      {/* Main content */}
      <div style={styles.main}>
        {/* Top Navbar */}
        <div style={styles.navbar}>
          <span style={styles.navText}>Welcome, User</span>
          <button style={styles.logoutBtn}>Logout</button>
        </div>

        {/* Content Area */}
        <div style={styles.content}>
          <h1>Dashboard Overview</h1>
          <div style={styles.cards}>
            <div style={styles.card}>
              <h3>Total Users</h3>
              <p>1,250</p>
            </div>
            <div style={styles.card}>
              <h3>Sales</h3>
              <p>$7,800</p>
            </div>
            <div style={styles.card}>
              <h3>Performance</h3>
              <p>93%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  sidebar: {
    width: '220px',
    backgroundColor: '#2c3e50',
    color: 'white',
    padding: '20px',
  },
  logo: {
    marginBottom: '30px',
    textAlign: 'center',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
  },
  navItem: {
    padding: '10px 0',
    cursor: 'pointer',
    borderBottom: '1px solid #34495e',
  },
  main: {
    flexGrow: 1,
    backgroundColor: '#ecf0f1',
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    height: '60px',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  },
  navText: {
    fontWeight: 'bold',
  },
  logoutBtn: {
    padding: '8px 12px',
    backgroundColor: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  content: {
    padding: '20px',
  },
  cards: {
    display: 'flex',
    gap: '20px',
    marginTop: '20px',
    flexWrap: 'wrap',
  },
  card: {
    flex: '1',
    minWidth: '200px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  },
};

export default DashBoard;
