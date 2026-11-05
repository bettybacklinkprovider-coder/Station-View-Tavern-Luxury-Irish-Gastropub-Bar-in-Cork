import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Calendar,
  CheckCircle2,
  ExternalLink,
  Sparkles,
  Users,
  Compass,
  Instagram,
  Facebook,
} from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '19:30',
    guests: '2',
    seatingArea: 'Indoor Dining Room',
    specialNotes: '',
  });

  const [reservationSuccess, setReservationSuccess] = useState<{
    reference: string;
    date: string;
    time: string;
    guests: string;
    area: string;
    name: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reference = 'SVT-' + Math.floor(1000 + Math.random() * 9000);
    setReservationSuccess({
      reference,
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
      area: formData.seatingArea,
      name: formData.name,
    });
  };

  const handleNewReservation = () => {
    setReservationSuccess(null);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      time: '19:30',
      guests: '2',
      seatingArea: 'Indoor Dining Room',
      specialNotes: '',
    });
  };

  return (
    <div className="bg-white text-stone-800">
      {/* Header Banner */}
      <section className="relative py-16 bg-stone-950 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/src/assets/images/hero_tavern_front_1793873205197.jpg"
            alt="Station View Tavern Outside"
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-rose-300 bg-white/10 backdrop-blur-md px-3 py-1 rounded-md">
            <Sparkles className="w-3.5 h-3.5 text-orange-400" />
            <span>Table Reservations &amp; Inquiries</span>
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Contact &amp; Reservations
          </h1>
          <p className="text-stone-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Reserve your table for an evening of delicious Irish gastropub cuisine, craft stouts, and relaxed Montenotte charm.
          </p>
        </div>
      </section>

      {/* Main Reservation & Details Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Online Table Reservation Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-stone-200/90 shadow-xl overflow-hidden">
            <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 p-6 sm:p-8 text-white">
              <div className="flex items-center gap-2 text-rose-100 text-xs font-semibold uppercase tracking-wider mb-1">
                <Calendar className="w-4 h-4" />
                <span>Instant Confirmation</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold">
                Online Table Reservation
              </h2>
              <p className="text-xs sm:text-sm text-rose-100/90 mt-1">
                For groups of up to 12 guests. Confirmation is guaranteed upon submission.
              </p>
            </div>

            {reservationSuccess ? (
              <div className="p-8 text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>

                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-md">
                    Reservation Confirmed
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-stone-900 mt-2">
                    Table Reserved for {reservationSuccess.name}
                  </h3>
                  <p className="text-sm text-stone-600 mt-1">
                    We look forward to hosting you at Station View Tavern.
                  </p>
                </div>

                <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 text-left space-y-3 text-sm max-w-md mx-auto">
                  <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                    <span className="text-xs text-stone-500">Booking Reference</span>
                    <span className="font-mono font-bold text-rose-600 text-base">
                      {reservationSuccess.reference}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 text-stone-700">
                    <div>
                      <span className="text-xs text-stone-500 block">Date &amp; Time</span>
                      <span className="font-semibold">
                        {reservationSuccess.date} at {reservationSuccess.time}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs text-stone-500 block">Party Size</span>
                      <span className="font-semibold">{reservationSuccess.guests} Guests</span>
                    </div>
                    <div className="col-span-2">
                      <span className="text-xs text-stone-500 block">Tavern Area</span>
                      <span className="font-semibold">{reservationSuccess.area}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                  <a
                    href={`https://wa.me/353214506847?text=Hi%20Station%20View%20Tavern,%20I%20have%20booking%20ref%20${reservationSuccess.reference}%20for%20${reservationSuccess.date}%20at%20${reservationSuccess.time}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors text-center"
                  >
                    Open in WhatsApp
                  </a>
                  <button
                    onClick={handleNewReservation}
                    className="flex-1 py-3 px-4 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs transition-colors"
                  >
                    Book Another Table
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                      Guest Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Fiona Murphy"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:ring-2 focus:ring-rose-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +353 87 234 5678"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:ring-2 focus:ring-rose-500 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. fiona@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:ring-2 focus:ring-rose-500 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                      Date *
                    </label>
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-rose-500 text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                      Time Slot *
                    </label>
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-rose-500 text-sm bg-white"
                    >
                      <option value="12:00">12:00 PM (Lunch)</option>
                      <option value="13:00">1:00 PM (Lunch)</option>
                      <option value="14:00">2:00 PM (Lunch)</option>
                      <option value="17:00">5:00 PM (Early Dinner)</option>
                      <option value="18:30">6:30 PM (Dinner)</option>
                      <option value="19:30">7:30 PM (Dinner)</option>
                      <option value="20:30">8:30 PM (Late Dinner)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                      Guests *
                    </label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-rose-500 text-sm bg-white"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="5">5 Persons</option>
                      <option value="6">6 Persons</option>
                      <option value="8">8 Persons</option>
                      <option value="10">10+ Persons (Group)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                    Seating Area
                  </label>
                  <select
                    value={formData.seatingArea}
                    onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-rose-500 text-sm bg-white"
                  >
                    <option value="Indoor Dining Room">Main Dining Room</option>
                    <option value="Fireside Snug Lounge">Fireside Snug Lounge</option>
                    <option value="Heated Station Terrace">Heated Station Terrace (Covered)</option>
                    <option value="Bar High-Top Counters">Bar High-Tops</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                    Special Requests (Allergies, Birthday, Matchday Group)
                  </label>
                  <textarea
                    rows={2}
                    value={formData.specialNotes}
                    onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                    placeholder="Let us know if you need highchairs or have dietary preferences..."
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:ring-2 focus:ring-rose-500 text-sm"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 hover:from-rose-700 hover:to-orange-600 shadow-md shadow-rose-500/25 transition-all"
                  >
                    Confirm Table Reservation Now
                  </button>
                  <p className="text-[11px] text-stone-500 text-center mt-2">
                    Instant confirmation. No booking fee or deposit required.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Information, Opening Hours & Quick Contacts */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Contact & Action Buttons */}
            <div className="bg-stone-50 rounded-2xl p-6 border border-stone-200/90 space-y-4">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Direct Tavern Contact
              </h3>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200">
                  <Phone className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-[11px] font-semibold text-stone-500 uppercase block">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${RESTAURANT_INFO.phone}`}
                      className="text-base font-bold text-rose-600 hover:underline"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                  </div>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="px-3 py-1.5 rounded-lg bg-rose-100 hover:bg-rose-200 text-rose-800 text-xs font-semibold"
                  >
                    Call
                  </a>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-emerald-200 bg-emerald-50/20">
                  <MessageSquare className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <span className="text-[11px] font-semibold text-stone-500 uppercase block">
                      WhatsApp Messaging
                    </span>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Fast replies for bookings &amp; private events
                    </p>
                  </div>
                  <a
                    href="https://wa.me/353214506847?text=Hello%20Station%20View%20Tavern,%20I%20would%20like%20to%20inquire%20about%20a%20table"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold"
                  >
                    Chat
                  </a>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200">
                  <Mail className="w-5 h-5 text-orange-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-semibold text-stone-500 uppercase block">
                      Email Inquiries
                    </span>
                    <a
                      href={`mailto:${RESTAURANT_INFO.email}`}
                      className="text-xs font-medium text-stone-800 hover:text-orange-600"
                    >
                      {RESTAURANT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-white rounded-xl border border-stone-200">
                  <MapPin className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-semibold text-stone-500 uppercase block">
                      Full Address
                    </span>
                    <p className="text-xs font-medium text-stone-800">
                      {RESTAURANT_INFO.address.full}
                    </p>
                    <span className="text-[11px] text-stone-500">Montenotte, Cork · Eircode T23 A265</span>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-2">
                <span className="text-xs font-semibold text-stone-600 uppercase tracking-wider block mb-2">
                  Follow Our Tavern
                </span>
                <div className="flex gap-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-rose-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-rose-600 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="https://tripadvisor.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 rounded-lg bg-white border border-stone-200 text-stone-700 hover:text-orange-600 transition-colors text-xs font-medium flex items-center gap-1.5"
                  >
                    <span>TripAdvisor</span>
                    <ExternalLink className="w-3 h-3 text-stone-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours Schedule Card */}
            <div className="bg-rose-50/50 rounded-2xl p-6 border border-rose-100 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-rose-700 uppercase tracking-wide">
                <Clock className="w-4 h-4 text-rose-600" />
                <span>Weekly Opening Schedule</span>
              </div>

              <div className="space-y-2 text-xs">
                {RESTAURANT_INFO.openingHours.map((slot, index) => (
                  <div
                    key={index}
                    className="p-2.5 bg-white rounded-lg border border-rose-100 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                  >
                    <span className="font-bold text-stone-800">{slot.day}</span>
                    <div className="text-stone-600 sm:text-right">
                      <span className="block font-medium">Bar: {slot.bar}</span>
                      <span className="text-[11px] text-stone-500">Kitchen: {slot.kitchen}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section with Full Width Embed */}
        <div className="mt-16 bg-white rounded-2xl border border-stone-200/90 p-6 sm:p-8 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-orange-600">
                Google Maps Location
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                Directions to Station View Tavern
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 mt-0.5">
                87 Lower Glanmire Rd, Montenotte, Cork, T23 A265
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=87+Lower+Glanmire+Rd,+Montenotte,+Cork,+Ireland"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors whitespace-nowrap self-start sm:self-auto"
            >
              <Compass className="w-4 h-4 text-orange-400" />
              <span>Get Directions in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="relative w-full h-96 rounded-xl overflow-hidden border border-stone-200 shadow-inner bg-stone-100">
            <iframe
              title="Station View Tavern Google Maps Embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Station+View+Tavern+87+Lower+Glanmire+Rd+Montenotte+Cork+Ireland&t=&z=16&ie=UTF8&iwloc=&output=embed"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
