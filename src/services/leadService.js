import { APP_CONFIG } from '../config';

/**
 * Capture lead in backend database before/during payment initiation.
 */
export async function createLead(formData) {
  try {
    const response = await fetch(`${APP_CONFIG.API_BASE_URL}/leads`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        full_name: formData.fullName,
        phone: formData.phone,
        linkedin_email: formData.email,
        linkedin_profile_url: formData.profileUrl,
        offer: 'CLIC_Toolkit_Plus_1Mo_SalesNav_Adv',
        amount: 3999.00,
        source: 'foxxy_linkedin_landing',
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.warn('Lead capture API error:', errData);
      return { success: false, error: errData };
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.warn('Could not reach Lead API (network fallback):', error);
    return { success: false, error: error.message };
  }
}

/**
 * Update lead with confirmed payment credentials after Razorpay checkout.
 */
export async function updateLeadPayment(leadId, paymentData) {
  if (!leadId) return { success: false };

  try {
    const response = await fetch(`${APP_CONFIG.API_BASE_URL}/leads/${leadId}/payment`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        payment_id: paymentData.payment_id,
        order_id: paymentData.order_id,
        signature: paymentData.signature,
        status: paymentData.status || 'completed',
      }),
    });

    if (!response.ok) {
      const errData = await response.json().catch(() => ({}));
      console.warn('Payment update API error:', errData);
      return { success: false, error: errData };
    }

    return await response.json();
  } catch (error) {
    console.warn('Payment update network error:', error);
    return { success: false, error: error.message };
  }
}

