import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, CheckCircle2, Phone, Mail, Sparkles, Download } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedOffer?: string | null;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  preselectedOffer,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    time: '19:00',
    guests: '2',
    seatingArea: 'Indoor Dining Room',
    specialNotes: preselectedOffer ? `Inquiring for offer: ${preselectedOffer}` : '',
  });

  const [submittedBooking, setSubmittedBooking] = useState<{
    reference: string;
    details: typeof formData;
  } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const reference = 'SVT-' + Math.floor(1000 + Math.random() * 9000);
    setSubmittedBooking({
      reference,
      details: { ...formData },
    });
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-sm animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-rose-100 overflow-hidden my-8">
        {/* Header gradient banner */}
        <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-rose-100 text-xs font-semibold tracking-wider uppercase mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Station View Tavern, Cork</span>
          </div>
          <h3 className="font-serif text-2xl font-bold">Reserve Your Table</h3>
          <p className="text-xs text-rose-100/90 mt-1">
            Instant table reservation confirmation for dining, snug lounge &amp; heated terrace.
          </p>
        </div>

        {submittedBooking ? (
          /* Confirmation Screen */
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-600 bg-rose-50 px-3 py-1 rounded-md">
                Booking Confirmed
              </span>
              <h4 className="font-serif text-2xl font-bold text-stone-900 mt-2">
                We Can’t Wait to Welcome You!
              </h4>
              <p className="text-sm text-stone-600 mt-1">
                Your table has been reserved at Station View Tavern.
              </p>
            </div>

            <div className="bg-stone-50 rounded-xl p-5 border border-stone-200 text-left space-y-3 text-sm">
              <div className="flex justify-between items-center pb-3 border-b border-stone-200">
                <span className="text-xs text-stone-500">Booking Reference</span>
                <span className="font-mono font-bold text-base text-rose-600">
                  {submittedBooking.reference}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-stone-700">
                <div>
                  <span className="text-xs text-stone-500 block">Name</span>
                  <span className="font-medium">{submittedBooking.details.name}</span>
                </div>
                <div>
                  <span className="text-xs text-stone-500 block">Guests</span>
                  <span className="font-medium">{submittedBooking.details.guests} Persons</span>
                </div>
                <div>
                  <span className="text-xs text-stone-500 block">Date &amp; Time</span>
                  <span className="font-medium">
                    {submittedBooking.details.date} at {submittedBooking.details.time}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-stone-500 block">Area</span>
                  <span className="font-medium">{submittedBooking.details.seatingArea}</span>
                </div>
              </div>
              {submittedBooking.details.specialNotes && (
                <div className="pt-2 border-t border-stone-200">
                  <span className="text-xs text-stone-500 block">Special Requests</span>
                  <span className="text-xs text-stone-600">
                    {submittedBooking.details.specialNotes}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/353214506847?text=Hi%20Station%20View%20Tavern,%20I%20have%20booking%20ref%20${submittedBooking.reference}%20for%20${submittedBooking.details.date}%20at%20${submittedBooking.details.time}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-colors text-center"
              >
                Send via WhatsApp
              </a>
              <button
                onClick={handleReset}
                className="flex-1 py-2.5 px-4 rounded-lg bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          /* Booking Form */
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Liam McCarthy"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-sm"
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
                  placeholder="e.g. +353 87 123 4567"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-sm"
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
                placeholder="e.g. liam@example.ie"
                className="w-full px-3.5 py-2.5 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500 text-sm"
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
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                  Time Slot *
                </label>
                <select
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
                >
                  <option value="12:00">12:00 PM (Lunch)</option>
                  <option value="13:00">1:00 PM (Lunch)</option>
                  <option value="14:00">2:00 PM (Lunch)</option>
                  <option value="16:00">4:00 PM (Sunset Bites)</option>
                  <option value="17:30">5:30 PM (Early Dinner)</option>
                  <option value="19:00">7:00 PM (Dinner)</option>
                  <option value="19:30">7:30 PM (Dinner)</option>
                  <option value="20:00">8:00 PM (Dinner)</option>
                  <option value="20:30">8:30 PM (Dinner)</option>
                  <option value="21:00">9:00 PM (Late Dinner)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                  Party Size *
                </label>
                <select
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests (Table for Two)</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6 Guests</option>
                  <option value="8">8 Guests (Large Table)</option>
                  <option value="10+">10+ Guests (Group Gathering)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                Seating Area Preference
              </label>
              <select
                value={formData.seatingArea}
                onChange={(e) => setFormData({ ...formData, seatingArea: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm bg-white"
              >
                <option value="Indoor Dining Room">Main Dining Room (Elegant &amp; Lively)</option>
                <option value="Fireside Snug Lounge">Fireside Snug Lounge (Cosy &amp; Intimate)</option>
                <option value="Heated Station Terrace">Heated Station Terrace (Covered Outdoor)</option>
                <option value="Bar High-Top Counters">Bar High-Tops (Near Craft Taps &amp; Sports)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 uppercase tracking-wide mb-1">
                Special Requests or Dietary Requirements (Optional)
              </label>
              <textarea
                rows={2}
                value={formData.specialNotes}
                onChange={(e) => setFormData({ ...formData, specialNotes: e.target.value })}
                placeholder="Highchair needed, celebrating anniversary, gluten intolerance, etc."
                className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-rose-600 via-rose-500 to-orange-500 hover:from-rose-700 hover:to-orange-600 shadow-md shadow-rose-500/25 transition-all"
              >
                Confirm Table Reservation
              </button>
              <p className="text-[11px] text-stone-500 text-center mt-2">
                Need immediate assistance? Call us directly at{' '}
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="text-rose-600 font-semibold underline">
                  {RESTAURANT_INFO.phone}
                </a>
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
