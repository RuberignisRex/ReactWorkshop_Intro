function ActionButton({ label, onClick, color }) {
    return (
        <button 
            onClick={onClick}
            style={{ backgroundColor: color, padding: '10px 20px', margin: '5px', border: '8px', cursor: 'pointer' }}
        >
            {label}
        </button>
    )
}

export default ActionButton;