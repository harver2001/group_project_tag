const PartitionedDivider = () => {
    return (
        <>
            <div style ={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
                height: 2,
                gap: '8px'
            }}>
                <div style = {{flex: 0.45, backgroundColor: '#B9B7B7', height: 2}}></div>
                <p>OR</p>
                <div style = {{flex: 0.45, backgroundColor: '#B9B7B7', height: 2}}></div>
            </div>
        </>
    )
}

export default PartitionedDivider;