import { useState } from "react";
import { useSharedTurnOrder } from "@baditaflorin/mesh-common";
import type { MeshConfig, YRoom } from "@baditaflorin/mesh-common";

type Props = { room: YRoom | null; config: MeshConfig };

export function Feature({ room, config }: Props) {
  const order = useSharedTurnOrder(room, "turn-taker:order");
  const [names, setNames] = useState("Ada, Ben, Cleo");
  const people = names
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean);

  return (
    <main className="feature-placeholder turn-taker">
      <h1>{config.appName}</h1>
      <p className="lede">{config.description}</p>
      <p className="feature-status">
        {room ? `Connected · ${room.peerCount} peer(s)` : "Connecting…"}
      </p>
      <label className="names-label" htmlFor="turn-participants">
        Speaking order (comma separated)
      </label>
      <textarea
        id="turn-participants"
        value={names}
        onChange={(event) => setNames(event.target.value)}
        rows={3}
      />
      <div className="action-row">
        <button
          type="button"
          disabled={!room || !people.length}
          onClick={() => order.setPeers(people)}
        >
          Set order
        </button>
        <button type="button" disabled={!order.current} onClick={order.next}>
          Next speaker
        </button>
      </div>
      <section className="turn-state" aria-live="polite" aria-label="Shared speaking order">
        <h2>{order.current ? `Now speaking: ${order.current}` : "Set a speaking order"}</h2>
        {order.peers.length > 0 && (
          <ol>
            {order.peers.map((peer, index) => (
              <li className={index === order.index ? "current-turn" : ""} key={peer}>
                {peer}
                {index === order.index ? " · current" : ""}
              </li>
            ))}
          </ol>
        )}
      </section>
    </main>
  );
}
