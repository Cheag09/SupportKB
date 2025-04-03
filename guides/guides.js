const guides = {
    'password-reset': {
      title: 'Password Reset Guide',
      lastUpdated: 'March 28, 2025',
      content: `
        <h2>Steps for Password Reset</h2>
        <p>Follow these steps to help a customer reset their password:</p>
        <ol>
          <li>Verify the customer's identity using at least two identification methods</li>
          <li>Navigate to the customer account page in the admin portal</li>
          <li>Select "Security Options" from the dropdown menu</li>
          <li>Click "Generate Password Reset Link"</li>
          <li>Send the link to the customer's verified email address</li>
          <li>Advise the customer that the link will expire in 24 hours</li>
          <li>Document the interaction in the customer's activity log</li>
        </ol>
        
        <h2>Important Notes</h2>
        <p>Never send password reset links to unverified email addresses. If the customer cannot access their email, escalate to a supervisor.</p>
      `
    },

    'account-lockout': {
      title: 'Account Lockout Procedures',
      lastUpdated: 'April 1, 2025',
      content: `
        <h2>Handling Account Lockouts</h2>
        <p>When a customer reports being locked out of their account:</p>
        <ol>
          <li>Verify the customer's identity using the full verification protocol</li>
          <li>Check the account status in the Customer Management System</li>
          <li>If locked due to failed login attempts, follow the "Failed Login" procedure</li>
          <li>If locked due to suspicious activity, transfer to the Security team</li>
          <li>If locked due to billing issues, transfer to the Billing department</li>
        </ol>
        
        <h2>Failed Login Procedure</h2>
        <p>For accounts locked due to failed login attempts:</p>
        <ol>
          <li>Inform the customer of our 24-hour cooldown policy</li>
          <li>Offer to reset their password (see Password Reset Guide)</li>
          <li>Remind them of proper security practices</li>
        </ol>
      `
    },

    'subscription-issues': {
      title: 'Subscription Issues',
      lastUpdated: 'March 15, 2025',
      content: `
        <h2>Common Subscription Problems</h2>
        <p>This guide covers the most frequent subscription-related issues:</p>
        
        <h2>1. Subscription Not Showing</h2>
        <p>If a customer has paid but their subscription isn't visible:</p>
        <ul>
          <li>Verify payment went through in the payment processor</li>
          <li>Check for system sync delays (allow up to 15 minutes)</li>
          <li>Manually refresh the subscription status in the admin panel</li>
        </ul>
        
        <h2>2. Wrong Subscription Tier</h2>
        <p>For customers on the wrong subscription tier:</p>
        <ul>
          <li>Verify their purchase receipt</li>
          <li>Check for recent plan changes or downgrades</li>
          <li>Adjust tier if necessary using the Subscription Adjustment Tool</li>
        </ul>
      `
    },

    'Test-guide': {
  title: 'Test-guide',
  lastUpdated: 'April 3, 2025',
  content: `
  <h2>Test-Guide</h2>
    <p>This embedded shows a test guide.</p>
    
   <iframe src="https://docs.google.com/document/d/e/2PACX-1vRUhSxt2EiGOSxPiVFiL4_NLrspDYfp96-drTVjvAc4llvf7fe0u0NEj74uIthYBvVYhCvur7rEG8k0/pub?embedded=true"></iframe>
      
    <p><a href="https://docs.google.com/document/d/1LQsHA5K5fAvKCCp20Q5V4jpx9a5SSiLkajadF6_8lbI/edit?tab=t.0" target="_blank">
      Open in Google Docs ↗
    </a></p>
  `
    },
'Static-printer-guide': {
  title: 'Static printer guide',
  lastUpdated: 'April 1, 2025',
  content: `
    <h2>Static printer guide</h2>
    <p>This guide is maintained in a doc to allow collaboration between departments.</p>
    
    <p><a href="https://docs.google.com/document/d/e/2PACX-1vSCcHBR6bDBvBW9eDbvxVrroaK06Fik2LzySG9Eh5DIqHmXgxp2vItGxGLPSVewRnlpEynSXnJNFrRI/pub" target="_blank" class="external-link">
      Open Static Printer Guide (Google Docs) ↗
    </a></p>
    
    <h2>Important Notes</h2>
    <p>Please do not modify the structure of the document. If you need to add items, contact level 2.</p>
  `
},
'onboarding-checklist': {
  title: 'New Employee Onboarding Checklist',
  lastUpdated: 'April 1, 2025',
  content: `
    <h2>Onboarding Checklist</h2>
    <p>This checklist is maintained in a Google Sheet to allow collaboration between departments.</p>
    
    <p><a href="https://docs.google.com/spreadsheets/d/your-sheet-id/edit" target="_blank" class="external-link">
      Open Onboarding Checklist (Google Sheet) ↗
    </a></p>
    
    <h2>Important Notes</h2>
    <p>Please do not modify the structure of the checklist. If you need to add items, contact HR.</p>
  `
},
'how-to-push-a-var': {
  title: 'How to push a var',
  lastUpdated: 'April 1, 2025',
  content: `
        <h2>Steps for pushing a vart</h2>
        <p>Follow these steps to push a var sheets to a pax device:</p>
        <ol>
          <li>Navigate to the pax store</li>
          <li>Step2 new step for testing</li>
          <li>Step3</li>
          <li>step4</li>
          <li>step5</li>
          <li>step6</li>
          <li>step7</li>
        </ol>
        
        <h2>Important Notes</h2>
        <p>Never delete an existiing TSYS app without first confirming the batch has been cleared.</p>
      `
}
  };