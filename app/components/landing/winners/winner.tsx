import React from 'react';
import styles from './winners.module.scss'
const Winner = () => {
  return (
    <section id={'winners'} className={styles.winners}>
      <h2>
        Победители
      </h2>
        <div className={styles.wrapper}>
            <div className={styles.block} style={{borderRadius:' 0px 200px'}}>
                <div>
                    <div className={styles.tabs}>
                        <button className={styles.active}>Мои подарки</button>
                        <button>Победители от партнеров</button>
                        <button>Денежные победители</button>
                    </div>
                    <div className={styles.dates}>
                        <button  className={styles.active}>06.12</button>
                        <button>07.12</button>
                        <button>08.12</button>
                        <button>09.12</button>
                        <button>10.12</button>
                        <button>11.12</button>
                        <button>12.12</button>
                        <button>13.12</button>
                        <button>14.12</button>
                        <button>15.12</button>
                        <button>16.12</button>
                        <button>17.12</button>
                        <button>18.12</button>
                        <button>19.12</button>
                        <button>20.12</button>
                        <button>21.12</button>
                        <button>22.12</button>
                        <button>23.12</button>
                        <button>24.12</button>
                        <button>25.12</button>
                        <button>26.12</button>
                    </div>
                    <table>
                        <thead>
                        <tr>
                            <th>лицевой счет</th>
                            <th>партнер</th>
                            <th>подарок</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    </section>
  );
};

export default Winner;