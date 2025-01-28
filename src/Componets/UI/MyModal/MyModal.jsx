import cl from './MyModal.module.css';
// eslint-disable-next-line react/prop-types
const MyModal = ({ children, visible, setVisible }) => {
    const rootClasses = [cl.myModal];
    if (visible) {
        rootClasses.push(cl.active);
    }
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;
