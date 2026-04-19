const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema(
  {
    eventId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Event',
      required: true,
      index: true,
    },
    organizerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    rawQr: {
      type: String,
      required: true,
      trim: true,
    },
    scannedAt: {
      type: Date,
      default: Date.now,
      index: true,
    },
  },
  { timestamps: true }
);

attendanceSchema.index({ eventId: 1, rawQr: 1 }, { unique: true });

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = { Attendance };


// Fake commit on Mon Apr 06 01:53:03 2026 

// Fake commit on Tue Mar 24 04:17:19 2026 

// Fake commit on Sun Apr 05 21:38:20 2026 

// Fake commit on Wed Mar 25 05:15:42 2026 

// Fake commit on Fri Mar 27 06:24:55 2026 

// Fake commit on Sat Apr 11 04:45:20 2026 

// Fake commit on Sat Apr 11 03:24:38 2026 

// Fake commit on Thu Apr 09 09:01:48 2026 

// Fake commit on Sat Mar 28 03:50:39 2026 

// Fake commit on Thu Mar 05 10:44:34 2026 

// Fake commit #10 on 4/4/2026 11:14:57 PM

// Fake commit #12 on 3/5/2026 10:32:45 PM

// Fake commit #34 on 3/14/2026 11:57:38 AM

// Fake commit #36 on 4/5/2026 11:11:19 PM

// Fake commit #44 on 4/20/2026 6:20:10 AM

// Fake commit #48 on 3/7/2026 3:53:55 PM

// Fake commit #53 on 4/4/2026 12:58:21 PM

// Fake commit #59 on 4/25/2026 8:25:44 PM

// Fake commit #63 on 4/19/2026 10:20:24 AM
