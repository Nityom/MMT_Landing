import React from 'react'
import { Link } from 'react-router-dom'
import { CONTACT_INFO } from '../constants/contact'

export const TermsOfService: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-[#FAF9F5] min-h-screen">
      {/* Header Container */}
      <div className="max-w-4xl mx-auto px-6 mb-12">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#D4580A] uppercase tracking-wider mb-4">
          <Link to="/" className="hover:underline flex items-center gap-1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Home
          </Link>
          <span className="text-[#3D3A35]/30">/</span>
          <span className="text-[#3D3A35]/70">Terms of Service</span>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#1B2A4A]/10 text-[#1B2A4A] text-xs font-outfit font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
          📜 Commercial & Campaign Agreement
        </div>

        <h1 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1B2A4A] tracking-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-base sm:text-lg text-[#3D3A35]/80 leading-relaxed max-w-2xl">
          These Terms of Service govern the engagement, booking, execution, and delivery of outdoor transit advertising, audio campaigns, and print publishing by Mrunal Multi Task Advertising Agency.
        </p>
        <div className="mt-4 text-xs text-[#3D3A35]/50 flex items-center gap-4">
          <span>Effective Date: September 1, 2026</span>
          <span>•</span>
          <span>Last Updated: September 10, 2026</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Quick Highlights Box */}
        <div className="bg-white border border-[#E5E2DA] rounded-2xl p-6 sm:p-8 shadow-sm mb-10">
          <h2 className="font-outfit font-bold text-lg text-[#1B2A4A] mb-4 flex items-center gap-2">
            <span>⚡</span> Terms at a Glance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#3D3A35]/80">
            <div className="flex items-start gap-3 p-3 bg-[#FAF9F5] rounded-xl border border-[#E5E2DA]/60">
              <span className="text-base">🛺</span>
              <div>
                <strong className="block text-[#1B2A4A] font-semibold">Fleet & Transit Scope</strong>
                Auto-rickshaws, e-rickshaws, and mobile vans run specified routes with daily GPS tracking.
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-[#FAF9F5] rounded-xl border border-[#E5E2DA]/60">
              <span className="text-base">📖</span>
              <div>
                <strong className="block text-[#1B2A4A] font-semibold">Publishing Proofs</strong>
                All Aarti Sangrah and annual calendar print jobs are executed strictly after client-approved digital proofs.
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-[#FAF9F5] rounded-xl border border-[#E5E2DA]/60">
              <span className="text-base">📸</span>
              <div>
                <strong className="block text-[#1B2A4A] font-semibold">Proof of Performance</strong>
                High-resolution installation photographs and geo-tagged confirmation provided for every vehicle.
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-[#FAF9F5] rounded-xl border border-[#E5E2DA]/60">
              <span className="text-base">🏛️</span>
              <div>
                <strong className="block text-[#1B2A4A] font-semibold">Legal Jurisdiction</strong>
                Governed by the laws of India, subject to exclusive court jurisdiction in Wardha, Maharashtra.
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Clauses */}
        <div className="bg-white border border-[#E5E2DA] rounded-2xl p-6 sm:p-10 shadow-sm space-y-10 text-[#3D3A35] leading-relaxed text-sm sm:text-base">
          
          {/* Clause 1 */}
          <section>
            <h2 className="font-outfit font-bold text-xl text-[#1B2A4A] mb-3 flex items-center gap-2">
              <span className="text-[#D4580A]">1.</span> Contractual Relationship & Acceptance
            </h2>
            <p className="text-[#3D3A35]/80 mb-3">
              By issuing a Purchase Order (PO), paying a campaign advance, submitting advertising creative, or engaging the services of <strong>Mrunal Multi Task Advertising Agency</strong> (&ldquo;MMT Agency&rdquo;, &ldquo;we&rdquo;, or &ldquo;our&rdquo;), the client (&ldquo;Client&rdquo;, &ldquo;Advertiser&rdquo;, or &ldquo;you&rdquo;) agrees to be legally bound by these Terms of Service.
            </p>
            <p className="text-[#3D3A35]/80">
              If an individual represents a company, corporate enterprise, or political entity, that individual warrants that they possess legal authorization to bind such entity to this Agreement.
            </p>
          </section>

          {/* Clause 2 */}
          <section>
            <h2 className="font-outfit font-bold text-xl text-[#1B2A4A] mb-3 flex items-center gap-2">
              <span className="text-[#D4580A]">2.</span> Services Offered
            </h2>
            <p className="text-[#3D3A35]/80 mb-3">
              MMT Agency provides full-spectrum outdoor transit media and commercial printing solutions, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#3D3A35]/80">
              <li>
                <strong>Auto-Rickshaw & E-Rickshaw Branding:</strong> Full hood wraps, back panel boards, interior driver-side placards, and rear display vinyls.
              </li>
              <li>
                <strong>Public Address (PA) Audio Announcements:</strong> Horn/speaker mounted vehicles broadcasting verified promotional scripts across designated municipal routes and residential colonies.
              </li>
              <li>
                <strong>Specialized Print Publishing:</strong> Custom designed religious and cultural Aarti Sangrah booklets, annual multi-color wall calendars, pocket panchang, and high-gauge flex banners.
              </li>
              <li>
                <strong>Campaign Route Planning & Management:</strong> Demographically targeted routing across Wardha, Nagpur, Amravati, Yavatmal, Chandrapur, Akola, Hinganghat, Pulgaon, and other regional hubs.
              </li>
            </ul>
          </section>

          {/* Clause 3 */}
          <section>
            <h2 className="font-outfit font-bold text-xl text-[#1B2A4A] mb-3 flex items-center gap-2">
              <span className="text-[#D4580A]">3.</span> Client Artwork, Content Guidelines & Legal Indemnity
            </h2>
            <p className="text-[#3D3A35]/80 mb-3">
              The Client retains full responsibility for all advertising materials, audio recordings, graphic layouts, and publication text supplied to MMT Agency.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#3D3A35]/80">
              <li>
                <strong>Legality & Truth in Advertising:</strong> All content must adhere to the Advertising Standards Council of India (ASCI) code, Motor Vehicles Act guidelines, and local municipal advertising bylaws.
              </li>
              <li>
                <strong>Prohibited Content:</strong> Materials containing hate speech, obscenity, copyright infringement, unauthorized trademarks, communal provocation, or defamatory statements will be rejected immediately without refund.
              </li>
              <li>
                <strong>Indemnification:</strong> The Client agrees to indemnify, defend, and hold harmless MMT Agency, its directors (Madhav Bhalerao, Mandar Bhalerao), and advisors against any claims, fines, municipal penalties, or litigation arising from the Client's supplied content.
              </li>
            </ul>
          </section>

          {/* Clause 4 */}
          <section>
            <h2 className="font-outfit font-bold text-xl text-[#1B2A4A] mb-3 flex items-center gap-2">
              <span className="text-[#D4580A]">4.</span> Campaign Execution & Proof of Performance (PoP)
            </h2>
            <p className="text-[#3D3A35]/80 mb-3">
              We uphold rigorous verification standards to guarantee genuine on-road exposure:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#3D3A35]/80">
              <li>
                <strong>Fabrication & Mounting:</strong> Campaign start dates are scheduled upon receipt of final approved artwork and agreed advance payment.
              </li>
              <li>
                <strong>Installation Evidence:</strong> High-resolution geo-tagged photographs of each branded auto-rickshaw showing the registration number plate and installed creative are delivered to the client within 48 hours of mounting.
              </li>
              <li>
                <strong>Transit Maintenance:</strong> If a banner or rear panel suffers accidental wear, tear, or vandalism during the campaign duration, MMT Agency will replace or repair the display upon notification within standard working turnaround time.
              </li>
            </ul>
          </section>

          {/* Clause 5 */}
          <section>
            <h2 className="font-outfit font-bold text-xl text-[#1B2A4A] mb-3 flex items-center gap-2">
              <span className="text-[#D4580A]">5.</span> Print & Publishing Deliverables (Calendars & Aarti Sangrah)
            </h2>
            <p className="text-[#3D3A35]/80 mb-3">
              For print production orders:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#3D3A35]/80">
              <li>
                <strong>Digital Proof Approval:</strong> Before mass printing commences, a digital soft proof (PDF/image) will be shared for final spelling, formatting, and layout review. Mass printing proceeds only after explicit Client sign-off.
              </li>
              <li>
                <strong>Grammage & Color Variance:</strong> Minor commercial printing tolerances (±5% in paper GSM, trim margins, and standard CMYK color gamut variations) are recognized industrial norms and shall not constitute a defect.
              </li>
            </ul>
          </section>

          {/* Clause 6 */}
          <section>
            <h2 className="font-outfit font-bold text-xl text-[#1B2A4A] mb-3 flex items-center gap-2">
              <span className="text-[#D4580A]">6.</span> Commercial Terms, Taxes & Payment Schedules
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[#3D3A35]/80">
              <li>
                <strong>Advance Payment:</strong> All transit campaigns and print publication runs require an agreed advance percentage prior to printing and fleet fabrication, with the remainder payable upon submission of Proof of Performance.
              </li>
              <li>
                <strong>Goods & Services Tax (GST):</strong> Applicable GST rates as per prevailing government tax slabs are charged on all commercial invoices.
              </li>
              <li>
                <strong>Late Remittances:</strong> Overdue payments beyond the agreed credit window may incur interest at 18% per annum or suspension of active transit fleet runs.
              </li>
            </ul>
          </section>

          {/* Clause 7 */}
          <section>
            <h2 className="font-outfit font-bold text-xl text-[#1B2A4A] mb-3 flex items-center gap-2">
              <span className="text-[#D4580A]">7.</span> Cancellation & Force Majeure
            </h2>
            <p className="text-[#3D3A35]/80 mb-3">
              Once materials are printed or mounted onto vehicles, printing fabrication costs are non-refundable. Notice of campaign cancellation must be delivered in writing at least 7 working days prior to the mounting date.
            </p>
            <p className="text-[#3D3A35]/80">
              Neither party shall be liable for delays caused by Force Majeure events, including severe unseasonal natural catastrophes, sudden municipal bandhs, curfew, or regulatory transit restrictions. In such events, campaign durations will be extended by equivalent days.
            </p>
          </section>

          {/* Clause 8 */}
          <section>
            <h2 className="font-outfit font-bold text-xl text-[#1B2A4A] mb-3 flex items-center gap-2">
              <span className="text-[#D4580A]">8.</span> Governing Law & Judicial Jurisdiction
            </h2>
            <p className="text-[#3D3A35]/80 mb-3">
              This Agreement shall be interpreted, construed, and enforced in accordance with the substantive laws of the Republic of India.
            </p>
            <p className="text-[#3D3A35]/80">
              Any dispute, controversy, or claim arising out of or relating to these terms, campaigns, or invoices shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Wardha, Maharashtra, India</strong>.
            </p>
          </section>

          {/* Clause 9 */}
          <section>
            <h2 className="font-outfit font-bold text-xl text-[#1B2A4A] mb-3 flex items-center gap-2">
              <span className="text-[#D4580A]">9.</span> Contacting Our Legal & Accounts Team
            </h2>
            <p className="text-[#3D3A35]/80 mb-4">
              For any clarification regarding service contracts, campaign agreements, or commercial terms, please contact:
            </p>

            <div className="p-5 bg-[#FAF9F5] border border-[#E5E2DA] rounded-xl text-sm">
              <div className="font-outfit font-bold text-[#1B2A4A] text-base mb-2">
                Mrunal Multi Task Advertising Agency
              </div>
              <div className="text-[#3D3A35]/80 space-y-1">
                <p><strong>Legal & Accounts Advisory:</strong> Advocate Mrunal Bhalerao / Mandar Bhalerao</p>
                <p><strong>Office Address:</strong> {CONTACT_INFO.address}</p>
                <p><strong>Direct Inquiries:</strong> <a href={`tel:${CONTACT_INFO.callPhoneRaw}`} className="text-[#D4580A] hover:underline">{CONTACT_INFO.callPhone}</a></p>
                <p><strong>WhatsApp Support:</strong> <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">{CONTACT_INFO.whatsappPhone}</a></p>
                <p><strong>Official Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#D4580A] hover:underline">{CONTACT_INFO.email}</a></p>
              </div>
            </div>
          </section>

        </div>

        {/* Bottom Navigation CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white border border-[#E5E2DA] rounded-2xl">
          <div>
            <div className="font-outfit font-bold text-base text-[#1B2A4A]">Questions about our terms or campaign packages?</div>
            <p className="text-xs text-[#3D3A35]/70">Our team is available 6 days a week to review agreements and campaign bookings.</p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Link
              to="/privacy-policy"
              className="flex-1 sm:flex-initial text-center font-outfit font-semibold text-xs sm:text-sm px-4 py-2.5 border border-[#E5E2DA] rounded-xl hover:bg-[#FAF9F5] text-[#1B2A4A] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/#contact"
              className="flex-1 sm:flex-initial text-center font-outfit font-bold text-xs sm:text-sm px-5 py-2.5 bg-[#D4580A] hover:bg-[#E8701F] text-white rounded-xl shadow-sm transition-all"
            >
              Contact Coordinators
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
