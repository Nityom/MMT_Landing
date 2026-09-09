import React from 'react'
import { Link } from 'react-router-dom'
import { CONTACT_INFO } from '../constants/contact'

export const PrivacyPolicy: React.FC = () => {
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
          <span className="text-[#3D3A35]/70">Privacy Policy</span>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#D4580A]/10 text-[#D4580A] text-xs font-outfit font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
          🛡️ Compliance & Trust
        </div>

        <h1 className="font-outfit font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#1B2A4A] tracking-tight mb-4">
          Privacy Policy
        </h1>
        <p className="text-base sm:text-lg text-[#3D3A35]/80 leading-relaxed max-w-2xl">
          At Mrunal Multi Task Advertising Agency (MMT Agency), we respect your privacy and are committed to protecting your personal, corporate, and campaign-related data.
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
            <span>📌</span> Summary of Key Commitments
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-[#3D3A35]/80">
            <div className="flex items-start gap-3 p-3 bg-[#FAF9F5] rounded-xl border border-[#E5E2DA]/60">
              <span className="text-base">🚫</span>
              <div>
                <strong className="block text-[#1B2A4A] font-semibold">Zero Spam or Selling</strong>
                We never sell, rent, or trade your contact info or business inquiries to any third party.
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-[#FAF9F5] rounded-xl border border-[#E5E2DA]/60">
              <span className="text-base">📍</span>
              <div>
                <strong className="block text-[#1B2A4A] font-semibold">GPS Telemetry Privacy</strong>
                Vehicle tracking data is used strictly for campaign route verification and proof-of-performance.
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-[#FAF9F5] rounded-xl border border-[#E5E2DA]/60">
              <span className="text-base">🎨</span>
              <div>
                <strong className="block text-[#1B2A4A] font-semibold">Artwork & Media Protection</strong>
                Your creative assets, banners, and publication drafts remain your confidential property.
              </div>
            </div>
            <div className="flex items-start gap-3 p-3 bg-[#FAF9F5] rounded-xl border border-[#E5E2DA]/60">
              <span className="text-base">⚖️</span>
              <div>
                <strong className="block text-[#1B2A4A] font-semibold">Indian IT & DPDP Act</strong>
                Compliant with India's Digital Personal Data Protection Act, 2023 and IT Act, 2000.
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Clauses */}
        <div className="bg-white border border-[#E5E2DA] rounded-2xl p-6 sm:p-10 shadow-sm space-y-10 text-[#3D3A35] leading-relaxed text-sm sm:text-base">
          
          {/* Section 1 */}
          <section>
            <h2 className="font-outfit font-bold text-xl text-[#1B2A4A] mb-3 flex items-center gap-2">
              <span className="text-[#D4580A]">1.</span> Introduction & Scope
            </h2>
            <p className="text-[#3D3A35]/80 mb-3">
              This Privacy Policy applies to the services and digital presence of <strong>Mrunal Multi Task Advertising Agency</strong> (&ldquo;MMT Agency&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), registered and headquartered in Wardha, Maharashtra, India.
            </p>
            <p className="text-[#3D3A35]/80">
              This policy governs how we collect, handle, store, and protect information when you visit our website (<strong>mmtagency.in</strong>), interact with our campaign coordinators via WhatsApp or phone, submit quotation requests, or hire us for transit mobile advertising, audio marketing, or custom print publications (including Calendars and Aarti Sangrah).
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="font-outfit font-bold text-xl text-[#1B2A4A] mb-3 flex items-center gap-2">
              <span className="text-[#D4580A]">2.</span> Information We Collect
            </h2>
            <p className="text-[#3D3A35]/80 mb-3">
              Depending on your engagement with our agency, we may collect the following categories of information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#3D3A35]/80">
              <li>
                <strong>Contact & Business Identification:</strong> Name, organization/brand name, email address, mobile/telephone numbers, business address, and GST registration number for tax invoicing.
              </li>
              <li>
                <strong>Campaign & Creative Assets:</strong> Brand logos, graphic banner artwork, audio voiceover recordings for PA announcement campaigns, publishing copy, and text scripts provided for calendar and Aarti Sangrah printing.
              </li>
              <li>
                <strong>Location & Geographic Targeting Preferences:</strong> Target colonies, wards, pin codes, districts, or routes requested for auto-rickshaw or mobile van campaigns.
              </li>
              <li>
                <strong>Technical & Inquiry Data:</strong> Messages submitted via web contact forms, inquiry timestamps, and basic browser information collected through anonymous server logs.
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="font-outfit font-bold text-xl text-[#1B2A4A] mb-3 flex items-center gap-2">
              <span className="text-[#D4580A]">3.</span> How We Use Your Information
            </h2>
            <p className="text-[#3D3A35]/80 mb-3">
              We process your data strictly for legitimate operational and campaign management purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#3D3A35]/80">
              <li>Preparing customized commercial proposals, rate cards, and transit campaign estimates.</li>
              <li>Scheduling, executing, and monitoring outdoor mobile auto-rickshaw campaigns and audio runs.</li>
              <li>Printing high-quality physical deliverables (e.g. flex banners, vehicle vinyls, devotional Aarti Sangrah booklets, annual wall calendars).</li>
              <li>Furnishing daily Proof of Performance (PoP) photographic logs and GPS run-sheet confirmations.</li>
              <li>Generating GST-compliant invoices, payment receipts, and commercial accounting records.</li>
              <li>Communicating campaign milestone updates via direct call, SMS, or WhatsApp.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="font-outfit font-bold text-xl text-[#1B2A4A] mb-3 flex items-center gap-2">
              <span className="text-[#D4580A]">4.</span> Vehicle Telemetry & Campaign Proofs
            </h2>
            <p className="text-[#3D3A35]/80 mb-3">
              As part of our transparent mobile transit advertising operations:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#3D3A35]/80">
              <li>
                We record GPS telemetry, route duration, and geo-stamped photographic evidence of branded rickshaws and vehicles.
              </li>
              <li>
                These photos verify banner installation, condition, and geographic reach for our clients. Photographed scenes may inadvertently capture public street scenes or vehicle surroundings in public areas; we take active care to respect public street privacy.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="font-outfit font-bold text-xl text-[#1B2A4A] mb-3 flex items-center gap-2">
              <span className="text-[#D4580A]">5.</span> Information Sharing & Third-Party Disclosure
            </h2>
            <p className="text-[#3D3A35]/80 mb-3">
              MMT Agency does not sell or rent customer data. Information is disclosed solely in the following controlled circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#3D3A35]/80">
              <li>
                <strong>Operational Subcontractors:</strong> Certified printing press operators, vehicle fabrication specialists, and logistics couriers who require specifications solely to fulfill the ordered print run or installation.
              </li>
              <li>
                <strong>Statutory Compliance:</strong> When mandated by government authorities, tax departments, or local municipal corporations (RTO / Municipal Councils) under applicable Indian law.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="font-outfit font-bold text-xl text-[#1B2A4A] mb-3 flex items-center gap-2">
              <span className="text-[#D4580A]">6.</span> Data Security & Retention
            </h2>
            <p className="text-[#3D3A35]/80 mb-3">
              We implement industry-standard organizational and technical safeguards to secure your commercial records, creative assets, and client information.
            </p>
            <p className="text-[#3D3A35]/80">
              Tax invoices and proof-of-performance archives are retained for periods required by statutory commercial recordkeeping regulations. Print assets and design drafts are archived securely for re-orders upon client authorization.
            </p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="font-outfit font-bold text-xl text-[#1B2A4A] mb-3 flex items-center gap-2">
              <span className="text-[#D4580A]">7.</span> Your Rights & Grievance Redressal
            </h2>
            <p className="text-[#3D3A35]/80 mb-3">
              In accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act) and the Information Technology Rules, you have the right to request access to your personal information, request corrections or updates, or request deletion of non-statutory records.
            </p>
            <p className="text-[#3D3A35]/80">
              If you have any questions or wish to exercise your rights, please reach out to our designated Grievance & Compliance team:
            </p>

            <div className="mt-4 p-5 bg-[#FAF9F5] border border-[#E5E2DA] rounded-xl text-sm">
              <div className="font-outfit font-bold text-[#1B2A4A] text-base mb-2">
                Mrunal Multi Task Advertising Agency
              </div>
              <div className="text-[#3D3A35]/80 space-y-1">
                <p><strong>Attn:</strong> Grievance Officer / Managing Director</p>
                <p><strong>Address:</strong> {CONTACT_INFO.address}</p>
                <p><strong>Email:</strong> <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#D4580A] hover:underline">{CONTACT_INFO.email}</a></p>
                <p><strong>Direct Helpline:</strong> <a href={`tel:${CONTACT_INFO.callPhoneRaw}`} className="text-[#D4580A] hover:underline">{CONTACT_INFO.callPhone}</a></p>
                <p><strong>WhatsApp Support:</strong> <a href={CONTACT_INFO.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">{CONTACT_INFO.whatsappPhone}</a></p>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="font-outfit font-bold text-xl text-[#1B2A4A] mb-3 flex items-center gap-2">
              <span className="text-[#D4580A]">8.</span> Policy Updates
            </h2>
            <p className="text-[#3D3A35]/80">
              We may occasionally update this Privacy Policy to reflect changes in regulatory standards or service offerings. Any revisions will be published on this page with an updated &ldquo;Last Updated&rdquo; timestamp.
            </p>
          </section>

        </div>

        {/* Bottom Navigation CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 bg-white border border-[#E5E2DA] rounded-2xl">
          <div>
            <div className="font-outfit font-bold text-base text-[#1B2A4A]">Ready to launch your advertising campaign?</div>
            <p className="text-xs text-[#3D3A35]/70">Connect with our campaign coordinators for customized transit routes and quotation.</p>
          </div>
          <div className="flex gap-3 w-full sm:w-auto">
            <Link
              to="/terms"
              className="flex-1 sm:flex-initial text-center font-outfit font-semibold text-xs sm:text-sm px-4 py-2.5 border border-[#E5E2DA] rounded-xl hover:bg-[#FAF9F5] text-[#1B2A4A] transition-colors"
            >
              View Terms of Service
            </Link>
            <Link
              to="/#contact"
              className="flex-1 sm:flex-initial text-center font-outfit font-bold text-xs sm:text-sm px-5 py-2.5 bg-[#D4580A] hover:bg-[#E8701F] text-white rounded-xl shadow-sm transition-all"
            >
              Get Free Quote
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
