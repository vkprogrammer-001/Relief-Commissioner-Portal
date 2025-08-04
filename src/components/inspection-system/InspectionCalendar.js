import React, { useState, useEffect } from 'react';
import { CustomHeading2 } from '../../utils/CustomUi';
import { FiChevronLeft, FiChevronRight, FiCalendar } from 'react-icons/fi';

const InspectionCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [inspections, setInspections] = useState([]);

  useEffect(() => {
    // Sample inspection data
    const sampleInspections = [
      { id: 1, date: '2025-01-03', type: 'Boat Safety', status: 'completed', district: 'Lucknow', inspector: 'Officer A' },
      { id: 2, date: '2025-01-05', type: 'Ghat Inspection', status: 'overdue', district: 'Kanpur', inspector: 'Officer B' },
      { id: 3, date: '2025-01-08', type: 'Life Jacket', status: 'due-soon', district: 'Agra', inspector: 'Officer C' },
      { id: 4, date: '2025-01-12', type: 'Emergency Drill', status: 'completed', district: 'Varanasi', inspector: 'Officer D' },
      { id: 5, date: '2025-01-15', type: 'Equipment Check', status: 'due-soon', district: 'Meerut', inspector: 'Officer E' },
      { id: 6, date: '2025-01-18', type: 'Registration', status: 'overdue', district: 'Allahabad', inspector: 'Officer F' },
      { id: 7, date: '2025-01-22', type: 'Safety Training', status: 'completed', district: 'Ghaziabad', inspector: 'Officer G' },
      { id: 8, date: '2025-01-25', type: 'Annual Review', status: 'due-soon', district: 'Noida', inspector: 'Officer H' },
    ];
    setInspections(sampleInspections);
  }, []);

  // Calendar utilities
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      year: 'numeric' 
    });
  };

  const getInspectionsForDate = (day) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return inspections.filter(inspection => inspection.date === dateStr);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#dcfce7';
      case 'due-soon': return '#fef9c3';
      case 'overdue': return '#fee2e2';
      default: return '#f3f4f6';
    }
  };

  const getStatusTextColor = (status) => {
    switch (status) {
      case 'completed': return '#166434';
      case 'due-soon': return '#854d0f';
      case 'overdue': return '#dc2626';
      default: return '#6b7280';
    }
  };

  // Navigation functions
  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  // Render calendar days
  const renderCalendarDays = () => {
    const daysInMonth = getDaysInMonth(currentDate);
    const firstDay = getFirstDayOfMonth(currentDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(
        <div key={`empty-${i}`} className="calendar-day empty"></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayInspections = getInspectionsForDate(day);
      const hasInspections = dayInspections.length > 0;
      const isToday = new Date().getDate() === day && 
                     new Date().getMonth() === currentDate.getMonth() && 
                     new Date().getFullYear() === currentDate.getFullYear();

      days.push(
        <div
          key={day}
          className={`calendar-day ${hasInspections ? 'has-inspections' : ''} ${isToday ? 'today' : ''}`}
          onClick={() => setSelectedDate(day)}
          style={{
            position: 'relative',
            cursor: 'pointer',
            padding: '4px',
            minHeight: '40px',
            border: '1px solid #e5e7eb',
            backgroundColor: isToday ? '#dbeafe' : '#ffffff',
            transition: 'all 0.15s ease',
            fontSize: '11px'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = isToday ? '#dbeafe' : '#f9fafb';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = isToday ? '#dbeafe' : '#ffffff';
          }}
        >
          <div style={{ 
            fontWeight: isToday ? '700' : '500',
            color: isToday ? '#1d4ed8' : '#374151',
            marginBottom: '2px',
            fontSize: '12px'
          }}>
            {day}
          </div>
          
          {/* Compact Inspection indicators */}
          {dayInspections.slice(0, 2).map((inspection) => (
            <div
              key={inspection.id}
              style={{
                fontSize: '7px',
                padding: '1px 2px',
                margin: '1px 0',
                borderRadius: '2px',
                backgroundColor: getStatusColor(inspection.status),
                color: getStatusTextColor(inspection.status),
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                textOverflow: 'ellipsis'
              }}
            >
              {inspection.type.length > 8 ? inspection.type.substring(0, 8) + '...' : inspection.type}
            </div>
          ))}
          
          {dayInspections.length > 2 && (
            <div style={{
              fontSize: '6px',
              color: '#6b7280',
              textAlign: 'center'
            }}>
              +{dayInspections.length - 2}
            </div>
          )}
        </div>
      );
    }

    return days;
  };

  const statusCounts = {
    total: inspections.length,
    completed: inspections.filter(i => i.status === 'completed').length,
    overdue: inspections.filter(i => i.status === 'overdue').length,
    dueSoon: inspections.filter(i => i.status === 'due-soon').length
  };

  return (
    <div className="inspection-calendar-container" style={{ maxWidth: '800px', margin: '0 auto', padding: '10px' }}>
      <CustomHeading2
        title="Inspection Calendar"
        subtitle="Monthly inspection schedule overview"
        titleSize="var(--text-xl)"
      />

      {/* Compact Header with Navigation */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '15px',
        padding: '10px 15px',
        background: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.1)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={goToPreviousMonth}
            style={{
              padding: '6px',
              background: '#f3f4f6',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            <FiChevronLeft size={16} />
          </button>
          
          <h2 style={{ 
            fontSize: '18px', 
            fontWeight: '600', 
            color: '#1f2937',
            margin: 0
          }}>
            {formatDate(currentDate)}
          </h2>
          
          <button
            onClick={goToNextMonth}
            style={{
              padding: '6px',
              background: '#f3f4f6',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            <FiChevronRight size={16} />
          </button>
        </div>

        <button
          onClick={goToToday}
          style={{
            padding: '6px 10px',
            background: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <FiCalendar size={12} />
          Today
        </button>
      </div>

      {/* Compact Status Cards */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '8px',
        marginBottom: '15px'
      }}>
        {[
          { label: 'Total', count: statusCounts.total, color: '#3b82f6', bg: '#dbeafe' },
          { label: 'Done', count: statusCounts.completed, color: '#059669', bg: '#d1fae5' },
          { label: 'Due', count: statusCounts.dueSoon, color: '#d97706', bg: '#fef3c7' },
          { label: 'Late', count: statusCounts.overdue, color: '#dc2626', bg: '#fee2e2' }
        ].map((stat, index) => (
          <div
            key={index}
            style={{
              padding: '10px',
              background: stat.bg,
              borderRadius: '6px',
              textAlign: 'center',
              border: `1px solid ${stat.color}20`
            }}
          >
            <div style={{ 
              fontSize: '20px', 
              fontWeight: '700', 
              color: stat.color,
              marginBottom: '2px' 
            }}>
              {stat.count}
            </div>
            <div style={{ 
              fontSize: '11px', 
              color: stat.color,
              fontWeight: '500'
            }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Compact Calendar Grid */}
      <div style={{
        background: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        overflow: 'hidden'
      }}>
        {/* Days of week header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          background: '#f8fafc',
          borderBottom: '1px solid #e2e8f0'
        }}>
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div
              key={day}
              style={{
                padding: '8px 4px',
                textAlign: 'center',
                fontWeight: '600',
                color: '#374151',
                fontSize: '11px'
              }}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '1px',
          background: '#e5e7eb'
        }}>
          {renderCalendarDays()}
        </div>
      </div>

      {/* Compact Legend */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '12px',
        marginTop: '10px',
        padding: '8px',
        background: '#ffffff',
        borderRadius: '6px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
      }}>
        {[
          { label: 'Late', color: '#fee2e2', textColor: '#dc2626' },
          { label: 'Due', color: '#fef9c3', textColor: '#854d0f' },
          { label: 'Done', color: '#dcfce7', textColor: '#166434' }
        ].map((item, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <div style={{
              width: '10px',
              height: '10px',
              backgroundColor: item.color,
              borderRadius: '2px',
              border: `1px solid ${item.textColor}30`
            }}></div>
            <span style={{ 
              fontSize: '11px', 
              color: item.textColor,
              fontWeight: '500'
            }}>
              {item.label}
            </span>
          </div>
        ))}
      </div>

      {/* Compact Selected Date Details */}
      {selectedDate && (
        <div style={{
          marginTop: '15px',
          padding: '15px',
          background: '#ffffff',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h3 style={{ 
            marginBottom: '10px',
            color: '#1f2937',
            fontSize: '16px'
          }}>
            {formatDate(currentDate)} {selectedDate}
          </h3>
          
          {getInspectionsForDate(selectedDate).length > 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {getInspectionsForDate(selectedDate).map(inspection => (
                <div
                  key={inspection.id}
                  style={{
                    padding: '8px 12px',
                    background: getStatusColor(inspection.status),
                    borderRadius: '6px',
                    border: `1px solid ${getStatusTextColor(inspection.status)}30`,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <div style={{
                      fontWeight: '600',
                      color: '#1f2937',
                      marginBottom: '2px',
                      fontSize: '14px'
                    }}>
                      {inspection.type}
                    </div>
                    <div style={{
                      fontSize: '12px',
                      color: '#6b7280'
                    }}>
                      {inspection.district} • {inspection.inspector}
                    </div>
                  </div>
                  <div style={{
                    padding: '3px 6px',
                    borderRadius: '8px',
                    fontSize: '10px',
                    fontWeight: '500',
                    color: getStatusTextColor(inspection.status),
                    background: 'rgba(255,255,255,0.7)'
                  }}>
                    {inspection.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div style={{
              textAlign: 'center',
              color: '#9ca3af',
              fontSize: '12px',
              padding: '15px'
            }}>
              No inspections scheduled
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InspectionCalendar;