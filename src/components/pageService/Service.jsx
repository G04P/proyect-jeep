import {Link} from 'react-router-dom';
import { Header } from '../Header/Header';
export const Service = () => {
  return (
    <section >
      <Header/>
        <div className='flex justify-center p-6 flex-col'>
            <h2 className='text-center font-bold uppercase text-xl p-4 '>PLAN DE MANTENIMIENTO</h2>
            <div className='flex flex-col sm:flex-row-reverse '>
             <img className='object-contain w-full' src="https://www.jeep.com.ar/content/dam/cross-regional/latam/jeep/es_ar/postventa/Desktop_mopar_jeep_plan_mant.jpg.img.1440.jpg" alt="" ></img>
             <p className='flex flex-row-reverse bg-black mt-0 text-white opacity-70 text-center sm:absolute sm:max-w-80 py-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro aliquam aliquid quae placeat provident ex pariatur cum alias soluta deserunt quis voluptate aperiam totam cumque possimus, nobis ipsam hic! Quibusdam.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
             </p>
            </div>
            <p className='text-center font-semibold text-sm p-4 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi, necessitatibus dignissimos voluptates odio sint voluptatum nisi ea corrupti veritatis quas nostrum possimus obcaecati deserunt aspernatur quam maiores eveniet adipisci nam?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ad distinctio tenetur nihil odio reprehenderit quos omnis voluptatem, architecto nisi, cum illum vel rem voluptatibus laboriosam, aut error quia! Eveniet.</p>
         <Link className='border font-bold p-4 bg-yellow-400 rounded-full text-center container mx-auto w-80 hover:bg-transparent hover:border-yellow-400' to={"/Service/Mantenimiento"}> <button> MANTENIMIENTO PROGRAMADO</button></Link>  
        </div>
        <div className='flex justify-center flex-wrap bg-repeat bg-blue-200'>
            <img className='object-contain w-96 p-3 rounded-full' src="https://imgs.search.brave.com/BOgWPk26bLy_uooXhNygHqLFUmL_6JeNXPgSMNbbj68/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbGFu/LTBrbS5vcmcvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDIv/cGxhbjBrbS1KRUVQ/LWltYWdlbjQtMTAy/NHgzNDEucG5n" alt="" />
            <img className='object-contain w-96 p-3 rounded-full' src="https://imgs.search.brave.com/BOgWPk26bLy_uooXhNygHqLFUmL_6JeNXPgSMNbbj68/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbGFu/LTBrbS5vcmcvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDIv/cGxhbjBrbS1KRUVQ/LWltYWdlbjQtMTAy/NHgzNDEucG5n" alt="" />
            <img className='object-contain w-96 p-3 rounded-full' src="https://imgs.search.brave.com/BOgWPk26bLy_uooXhNygHqLFUmL_6JeNXPgSMNbbj68/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbGFu/LTBrbS5vcmcvd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMDIv/cGxhbjBrbS1KRUVQ/LWltYWdlbjQtMTAy/NHgzNDEucG5n" alt="" />
        </div>
    </section>
  )
}
