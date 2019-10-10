import matplotlib.pyplot as plt, mpld3
from matplotlib import pyplot, transforms
from mpl_toolkits.mplot3d import Axes3D
import numpy as np
from matplotlib.patches import Ellipse
import pandas as pd
import datetime as dt


def grafica(year):
    r_earth = 6371

    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')

    u, v = np.mgrid[0:2*np.pi:20j, 0:np.pi:10j]
    x = r_earth*np.cos(u)*np.sin(v)
    y = r_earth*np.sin(u)*np.sin(v)
    z = r_earth*np.cos(v)
    ax.plot_wireframe(x, y, z, color="b",alpha=0.1)
    ax.set_xlim(-50000, 50000)
    ax.set_ylim(-50000, 50000)
    ax.set_zlim(-50000, 50000)

    data=pd.read_json("Data/satcat.json")
    final=int(year)
    inicio=int(final)-5


    data_filter=data.loc[(data['LAUNCH_YEAR']>=inicio)&(data['LAUNCH_YEAR']<=final),['INCLINATION','PERIGEE','APOGEE','LAUNCH_YEAR']]


    for ind in data_filter.index:
        ang = data_filter['INCLINATION'][ind]
        perigee = data_filter['PERIGEE'][ind]
        apogee = data_filter['APOGEE'][ind]

        u_e = np.linspace(0,  2*np.pi, 100)
        h = 362
        a = (perigee + apogee + 2*r_earth)/2
        c = a - (perigee + r_earth)
        ecc = c / a
        b = np.sqrt(pow(a,2)*(1-pow(ecc,2)))
        x_e = h + a * np.cos(u_e)
        y_e = b * np.sin(u_e)

        base = pyplot.gca().transData
        rot = transforms.Affine2D().rotate_deg(ang)

        ax.plot(x_e, y_e, 'r',alpha=0.1, transform = rot + base)

    fig.patch.set_facecolor('xkcd:black')
    ax.set_facecolor('xkcd:black')
    ax.grid(color='black')
    ax.tick_params(axis='x', colors='white')
    ax.tick_params(axis='y', colors='white')
    ax.tick_params(axis='z', colors='white')
    ax.view_init(elev=10., azim=180)
    plt.tight_layout()
    plt.savefig('image.png')
    # plt.show()
    #print (mpld3.fig_to_html(plt.show()))
    print('Done')
#grafica(1967)
