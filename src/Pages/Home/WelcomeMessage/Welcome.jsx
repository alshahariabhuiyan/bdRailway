import { Typewriter } from "react-simple-typewriter";

const Welcome = () => {
    return (
        <div className='mt-20 text-center text-2xl'>
        <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
          {'Hello and welcome to Bangladesh Railway Station '}
          <span style={{ color: 'lightseagreen', fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                ' Your journey begins here.',
                ' We wish you a safe and pleasant trip.',
                ' Wishing you a comfortable ride',
                ' Your adventure awaits. Welcome aboard!',
                ` We're here to assist you on your journey. Bon voyage!`
            ]}
              loop={100}
              cursor
              cursorStyle='_'
              typeSpeed={150}
              deleteSpeed={10}
              delaySpeed={1000}
            //   onLoopDone={handleDone}
            //   onType={handleType}
            />
          </span>
        </h1>
      </div>
    );
};

export default Welcome;